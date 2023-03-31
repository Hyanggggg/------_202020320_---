var banner_top = 0;
var img_cnt = 0;
var first = 1;
var last;
var interval;

$(document).ready(function () {
  $(".rolling_wrap a").each(function () {
    $(this).css("top", banner_top);
    banner_top += $(this).width() + 110;
    $(this).attr("id", "content" + ++img_cnt);
  });

  last = img_cnt;
  startAction();

  $(".content01").hover(
    function () {
      stopAction();
    },
    function () {
      startAction();
    }
  );
  $(".content02").hover(
    function () {
      stopAction();
    },
    function () {
      startAction();
    }
  );
  $(".content03").hover(
    function () {
      stopAction();
    },
    function () {
      startAction();
    }
  );
  $(".content04").hover(
    function () {
      stopAction();
    },
    function () {
      startAction();
    }
  );
  $(".content05").hover(
    function () {
      stopAction();
    },
    function () {
      startAction();
    }
  );
  $(".content06").hover(
    function () {
      stopAction();
    },
    function () {
      startAction();
    }
  );
  $(".content07").hover(
    function () {
      stopAction();
    },
    function () {
      startAction();
    }
  );
  $(".content08").hover(
    function () {
      stopAction();
    },
    function () {
      startAction();
    }
  );
  $(".content09").hover(
    function () {
      stopAction();
    },
    function () {
      startAction();
    }
  );
  $(".content10").hover(
    function () {
      stopAction();
    },
    function () {
      startAction();
    }
  );

  $(".content11").hover(
    function () {
      stopAction();
    },
    function () {
      startAction();
    }
  );
  $(".content12").hover(
    function () {
      stopAction();
    },
    function () {
      startAction();
    }
  );
});

function startAction() {
  interval = setInterval(function () {
    $(".rolling_wrap a").each(function () {
      $(this).css("top", $(this).position().top - 1);
    });

    var first_content = $("#content" + first);
    var last_content = $("#content" + last);

    if (first_content.position().top < "-" + $(first_content).width()) {
      first_content.css(
        "top",
        last_content.position().top + last_content.width() + 110
      );
      first++;
      last++;
      if (last > img_cnt) {
        last = 1;
      }
      if (first > img_cnt) {
        first = 1;
      }
    }
  }, 15);
}

function stopAction() {
  clearInterval(interval);
}
