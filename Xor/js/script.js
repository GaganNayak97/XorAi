
//jquery toggle class
$(document).on("click", ".jtc", function () {
  var $trigger = $(this);
  var targetSelector = $trigger.attr("jtc");
  var toggleClass = $trigger.attr("tc");

  if (!toggleClass) return;

  // NEW RULE: jtc="empty" → self target
  if (targetSelector === "empty") {
    $trigger.toggleClass(toggleClass);
    return;
  }

  if (!targetSelector) return;

  $(targetSelector).toggleClass(toggleClass);

});

//jquery remove class
$(document).on("click", ".jrc", function () {

  var $trigger = $(this);
  var targetSelector = $trigger.attr("jrc");
  var removeClass = $trigger.attr("rc");

  if (!targetSelector || !removeClass) return;

  $(targetSelector).removeClass(removeClass);

});

//jquery add class 
$(document).on("click", ".jac", function () {

  var $trigger = $(this);
  var targetSelector = $trigger.attr("jac");
  var addClass = $trigger.attr("ac");

  if (!targetSelector || !addClass) return;

  $(targetSelector).addClass(addClass);

});


//jquery add remove class custom code
$(document).on("click", ".jrac", function () {

  var $trigger = $(this);
  var targetSelector = $trigger.attr("jrac");
  var addClass = $trigger.attr("ac");
  var removeClass = $trigger.attr("rc");

  if (!targetSelector) return;

  var $target = $(targetSelector);

  if (!$target.length) return;

  if (removeClass) {
    $target.removeClass(removeClass);
  }

  if (addClass) {
    $target.addClass(addClass);
  }

});
