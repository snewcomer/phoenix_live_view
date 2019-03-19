import { Rendered } from '../js/phoenix_live_view'

describe('Rendered', () => {
  describe('mergeDiff', () => {
    it('recursively merges two diffs', () => {
      expect(Rendered.mergeDiff(simpleDiff1, simpleDiff2)).toEqual(
        simpleDiffResult
      )
      expect(Rendered.mergeDiff(deepDiff1, deepDiff2)).toEqual(deepDiffResult)
    })
    it('returns the latter diff if it contains a `static` key', () => {
      const diff1 = { 0: ['a'], 1: ['b'] }
      const diff2 = { 0: ['c'], static: 'c' }
      expect(Rendered.mergeDiff(diff1, diff2)).toEqual(diff2)
    })
  })

  describe('isNewFingerprint', () => {
    it('returns true if `diff.static` is truthy', () => {
      const diff = { static: ['<h2>'] }
      expect(Rendered.isNewFingerprint(diff)).toEqual(true)
    })
    it('returns false if `diff.static` is falsy', () => {
      const diff = { static: undefined }
      expect(Rendered.isNewFingerprint(diff)).toEqual(false)
    })
    it('returns false if `diff` is undefined', () => {
      expect(Rendered.isNewFingerprint()).toEqual(false)
    })
  })

  describe('toString', () => {
    it('stringifies a diff', () => {
      expect(Rendered.toString(simpleDiffResult).trim()).toEqual(
        `
<div class="thermostat">
  <div class="bar cooling">
    <a href="#" phx-click="toggle-mode">cooling</a>
    <span>07:15:04 PM</span>
  </div>
</div>
      `.trim()
      )
    })
  })

  describe('toOutputBuffer', () => {
    it('populates the output buffer', () => {
      const output = { buffer: '' }
      Rendered.toOutputBuffer(simpleDiffResult, output)
      expect(output.buffer.trim()).toEqual(
        `
<div class="thermostat">
  <div class="bar cooling">
    <a href="#" phx-click="toggle-mode">cooling</a>
    <span>07:15:04 PM</span>
  </div>
</div>
      `.trim()
      )
    })
  })
})

const simpleDiff1 = {
  '0': 'cooling',
  '1': 'cooling',
  '2': '07:15:03 PM',
  static: [
    '<div class="thermostat">\n  <div class="bar ',
    '">\n    <a href="#" phx-click="toggle-mode">',
    '</a>\n    <span>',
    '</span>\n  </div>\n</div>\n',
  ],
}

const simpleDiff2 = {
  '2': '07:15:04 PM',
}

const simpleDiffResult = {
  '0': 'cooling',
  '1': 'cooling',
  '2': '07:15:04 PM',
  static: [
    '<div class="thermostat">\n  <div class="bar ',
    '">\n    <a href="#" phx-click="toggle-mode">',
    '</a>\n    <span>',
    '</span>\n  </div>\n</div>\n',
  ],
}

const deepDiff1 = {
  '0': {
    '0': {
      dynamics: [['user1058', '1'], ['user99', '1']],
      static: ['        <tr>\n          <td>', ' (', ')</td>\n        </tr>\n'],
    },
    static: [
      '  <table>\n    <thead>\n      <tr>\n        <th>Username</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n',
      '    </tbody>\n  </table>\n',
    ],
  },
  '1': {
    dynamics: [
      [
        'asdf_asdf',
        'asdf@asdf.com',
        '123-456-7890',
        '<a href="/users/1">Show</a>',
        '<a href="/users/1/edit">Edit</a>',
        '<a href="#" phx-click="delete_user" phx-value="1">Delete</a>',
      ],
    ],
    static: [
      '    <tr>\n      <td>',
      '</td>\n      <td>',
      '</td>\n      <td>',
      '</td>\n\n      <td>\n',
      '        ',
      '\n',
      '      </td>\n    </tr>\n',
    ],
  },
  '2': '<a href="/users/new">New User</a>',
  static: [
    '<h2>Listing Users</h2>\n\n',
    '\n<table>\n  <thead>\n    <tr>\n      <th>Username</th>\n      <th>Email</th>\n      <th>Phone #</th>\n\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n',
    '  </tbody>\n</table>\n\n<span>',
    '</span>\n',
  ],
}
const deepDiff2 = {
  '0': {
    '0': {
      dynamics: [['user1058', '2']],
    },
  },
}
const deepDiffResult = {
  '0': {
    '0': {
      dynamics: [['user1058', '2']],
      static: ['        <tr>\n          <td>', ' (', ')</td>\n        </tr>\n'],
    },
    static: [
      '  <table>\n    <thead>\n      <tr>\n        <th>Username</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n',
      '    </tbody>\n  </table>\n',
    ],
  },
  '1': {
    dynamics: [
      [
        'asdf_asdf',
        'asdf@asdf.com',
        '123-456-7890',
        '<a href="/users/1">Show</a>',
        '<a href="/users/1/edit">Edit</a>',
        '<a href="#" phx-click="delete_user" phx-value="1">Delete</a>',
      ],
    ],
    static: [
      '    <tr>\n      <td>',
      '</td>\n      <td>',
      '</td>\n      <td>',
      '</td>\n\n      <td>\n',
      '        ',
      '\n',
      '      </td>\n    </tr>\n',
    ],
  },
  '2': '<a href="/users/new">New User</a>',
  static: [
    '<h2>Listing Users</h2>\n\n',
    '\n<table>\n  <thead>\n    <tr>\n      <th>Username</th>\n      <th>Email</th>\n      <th>Phone #</th>\n\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n',
    '  </tbody>\n</table>\n\n<span>',
    '</span>\n',
  ],
}
