$(document).ready(function () {
  $("#card-number-1").on("input", function () {
    var inputVal = $(this).val();
    inputVal = inputVal.replace(/[^0-9]/g, "");
    $(this).val(inputVal);
    $("#card-number-holder-1").text(inputVal);
  });
  $("#card-number-2").on("input", function () {
    var inputVal = $(this).val();
    inputVal = inputVal.replace(/[^0-9]/g, "");
    $(this).val(inputVal);
    $("#card-number-holder-2").text(inputVal);
  });
  $("#card-number-3").on("input", function () {
    var inputVal = $(this).val();
    inputVal = inputVal.replace(/[^0-9]/g, "");
    $(this).val(inputVal);
    $("#card-number-holder-3").text(inputVal);
  });
  $("#card-number-4").on("input", function () {
    var inputVal = $(this).val();
    inputVal = inputVal.replace(/[^0-9]/g, "");
    $(this).val(inputVal);
    $("#card-number-holder-4").text(inputVal);
  });
  $("#CVV2-number").on("input", function () {
    var inputVal = $(this).val();
    inputVal = inputVal.replace(/[^0-9]/g, "");
    $(this).val(inputVal);
    $("#CVV2-holder").text(inputVal);
  });
  $("#expire-month").on("input", function () {
    var inputVal = $(this).val();
    inputVal = inputVal.replace(/[^0-9]/g, "");
    $(this).val(inputVal);
    $("#expire-year-holder").text(inputVal);
  });

  $("#expire-year").on("input", function () {
    var inputVal = $(this).val();
    inputVal = inputVal.replace(/[^0-9]/g, "");
    $(this).val(inputVal);
    $("#expire-month-holder").text(inputVal);
  });

  // $("#expire-year").on("input", function () {
  //   $("#expire-month-holder").text($(this).val());
  // });

  $(".secure-keybored").on("click", function () {
    let secureNumber = $(this).text();
    let cvv2Holder = $("#CVV2-holder").text();
    let cvv2Number = $("#CVV2-number").val();

    var charLength = cvv2Number.length;

    $("#CVV2-number").val(cvv2Number + secureNumber);
    $("#CVV2-holder").text(cvv2Holder + secureNumber);
    if (charLength > 3) {
      $("#CVV2-number").val(cvv2Number);
      $("#CVV2-holder").text(cvv2Holder);
    }
  });

  $(".eraser").on("click", function () {
    $("#CVV2-holder").text("");
    $("#CVV2-number").val("");
  });

  $(".backspace").on("click", function () {
    let cvv2Number = $("#CVV2-number").val();
    let cvv2Newnumber = cvv2Number.slice(0, -1);
    $("#CVV2-number").val(cvv2Newnumber);
    $("#CVV2-holder").text(cvv2Newnumber);
  });

  $(".fa-keyboard").on("click", function () {
    $(".keyboared-wrapper").toggle();
  });

  $(".fa-close").on("click", function () {
    $(".keyboared-wrapper").hide();
  });
});
