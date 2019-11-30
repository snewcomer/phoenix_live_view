defmodule Phoenix.LiveViewTest.DOMTest do
  use ExUnit.Case, async: true

  alias Phoenix.LiveViewTest.DOM

  # >= 4432 characters
  @too_big_session Enum.map(1..4432, fn _ -> "t" end) |> Enum.join()

  @html """
  <h1>top</h1>
  <div data-phx-view="789"
    data-phx-session="SESSION1"
    id="phx-123"></div>
  <div data-phx-parent-id="456"
      data-phx-view="789"
      data-phx-session="SESSION2"
      data-phx-static="STATIC2"
      id="phx-456"></div>
  <div data-phx-session="#{@too_big_session}"
    data-phx-view="789"
    id="phx-458"></div>
  <h1>bottom</h1>
  """

  test "finds views given html" do
    assert DOM.find_views(@html) == [
             {"phx-123", "SESSION1", nil},
             {"phx-456", "SESSION2", "STATIC2"},
             {"phx-458", @too_big_session, nil}
           ]

    assert DOM.find_views("none") == []
  end

  @html_original """
    <html lang="en"><main role="main" class="container"><p class="alert alert-info" role="alert"></p><p class="alert alert-danger" role="alert"></p><div data-phx-main="true" data-phx-session="" data-phx-view="CommentLive.Index" id="phx-KqkT-Fl4">
    <div class="main"><div class="js-comment"><form accept-charset="UTF-8" action="#" class="comment_form" method="post" phx-hook="Comment" phx-submit="save"><input name="_csrf_token" type="hidden" value="PSYFWi0hHRwPNzxcByIeRjorWD01MlwRqOGhwunJKvE0heU1wA4YSS1a"/><input name="_utf8" type="hidden" value="✓"><textarea id="comment_body" name="comment[body]" placeholder="Cool beans..." rows="2" required="required"></textarea><div class="comment_form-footer"><button type="submit">Comment</button></div></form></div>
    <div class="comment_list" id="root-comments" phx-update="append\">
      <a id="comment-anchor-979" class="anchor" data-phx-component="0"></a>
      <article class="comment comment--parent" id="comment-979" data-phx-component="0"><div class="comment-body">\n    some body\n  </div><div class="comment-footer"><p class="comment-reply"><a href="javascript:;" phx-click="toggle-reply" title="Reply to this comment">reply</a></p><p class="comment-permalink"><a href="#comment979">2019/11/30</a></p></div>
        <section class="comment-replies" phx-update="append" id="replies-979"></section>
      </article>
    </div>
    </div></div>
    </main><script type="text/javascript" src="/js/app.js"></script></body></html>
  """

  @inner_html """
    <div class="main"><div class="js-comment"><form accept-charset="UTF-8" action="#" class="comment_form" method="post" phx-hook="Comment" phx-submit="save"><input name="_csrf_token" type="hidden" value="PSYFWi0hHRwPNzxcByIeRjorWD01MlwRqOGhwunJKvE0heU1wA4YSS1a"><input name="_utf8" type="hidden" value="✓"><textarea id="comment_body" name="comment[body]" placeholder="Cool beans..." rows="2" required></textarea><div class="comment_form-footer"><button type="submit">Comment</button></div></form></div>
    <div class="comment_list" id="root-comments" phx-update="append">
      <a id="comment-anchor-979" class="anchor" data-phx-component="0"></a>
      <article class="comment comment--parent" id="comment-979" data-phx-component="0"><div class="comment-body">\n    some body\n  </div><div class="comment-footer"><p class="comment-reply"><a href="javascript:;" phx-click="toggle-reply" title="Reply to this comment">reply</a></p><p class="comment-permalink"><a href="#comment979">2019/11/30</a></p></div>
        <section class="comment-replies" phx-update="append" id="replies-979">
          <a id="comment-anchor-980" class="anchor" data-phx-component="1"></a>
          <article class="comment comment--child" id="comment-980" data-phx-component="1"><div class="comment-body">\n    foobar\n  </div><div class="comment-footer"><p class="comment-reply"><a href="javascript:;" phx-click="toggle-reply" title="Reply to this comment">reply</a></p><p class="comment-permalink"><a href="#comment980">2019/11/30</a></p></div>
            <section class="comment-replies" phx-update="append" id="replies-980"></section>
          </article>
        </section>
      </article>
    </div>
    </div>
  """

  @tag :wip
  test "patch_id" do
    assert DOM.patch_id("phx-KqkT-Fl4", @html_original, @inner_html) == []
  end
end
