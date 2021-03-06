$(function () {
  function buildHTML(product) {
    if (product.status === false) {
      var html =
        `<a href="/sells/${product.id}">
          <div class="search-main__right-contents__images__list">
            <div class="search-main__right-contents__images__list__image">
              <img width="220px" height="150px" src="${product.image}">
            </div>
            <div class="search-main__right-contents__images__list__name">
              ${product.name}
            </div>
            <div class="search-main__right-contents__images__list__price">
              ${product.price}
            </div>
          </div>
        </a>`
    }
    else {
      var html =
      `<a href="/sells/${product.id}">
        <div class="search-main__right-contents__images__list">
          <div class="search-main__right-contents__images__list__image">
            <img width="220px" height="150px" src="${product.image}">
          </div>
          <div class="search-main__right-contents__images__list__image__soldout">
            <img width="220px" height="150px" src="/material/logo/unnamed (1).png">
          </div>
          <div class="search-main__right-contents__images__list__name">
            ${product.name}
          </div>
          <div class="search-main__right-contents__images__list__price">
            ${product.price}
          </div>
        </div>
      </a>`
    }
    return html;
  };

  $(".search-main__left-contents__sort-selector__box").on("change", function() {
    var keyword = $(".search-main__right-contents__keyword").html()
    var num = $(this).val();
    $.ajax({
      type: 'GET',
      url: `/searches/sort`,
      data: {keyword, num},
      dataType: 'json'
    })
    .done(function (products) {
      if (products.length !== 0) {
        var insertHTML = '';
        $(".search-main__right-contents__images").empty();
        $.each(products, function (i, product) {
          insertHTML += buildHTML(product);
        })
        $(".search-main__right-contents__images").append(insertHTML);
      }
    })
    .fail(function () {
      alert('検索結果の取得に失敗しました');
    });
  });
});