"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function () {
  var _$$DataTable;

  var table = $('#example').DataTable((_$$DataTable = {
    dom: "B<'row'<'col-sm-6 col-md-6'f><'ml-3'l>>rtip"
  }, _defineProperty(_$$DataTable, "dom", 'Bfrtip'), _defineProperty(_$$DataTable, "paging", false), _defineProperty(_$$DataTable, "ordering", false), _defineProperty(_$$DataTable, "info", false), _defineProperty(_$$DataTable, "scrollX", true), _defineProperty(_$$DataTable, "fields", [{
    label: 'First name:',
    name: 'first_name'
  }, {
    label: 'Last name:',
    name: 'last_name'
  }, {
    label: 'City:',
    name: 'city'
  }, {
    label: 'Description:',
    name: 'description',
    type: 'qr'
  }]), _defineProperty(_$$DataTable, "buttons", [{
    extend: "print",
    exportOptions: {
      columns: ":visible",
      autoPrint: true,
      orientation: "landscape"
    },
    text: '<img src="../img/print.png" class="img-fluid">'
  }, {
    extend: 'csvHtml5',
    text: '<img src="../img/csv.ico" class="img-fluid">',
    titleAttr: 'CSV'
  }, {
    extend: 'pdfHtml5',
    text: '<img src="../img/pdf.png" class="img-fluid">',
    titleAttr: 'PDF'
  }, {
    extend: 'excelHtml5',
    text: '<img src="../img/excel.png" class="img-fluid">',
    titleAttr: 'Excel'
  }, {
    extend: 'copyHtml5',
    text: '<img src="../img/copy.ico" class="img-fluid">',
    titleAttr: 'Copy'
  }]), _defineProperty(_$$DataTable, "language", {
    search: '<strong style="display:none">البحث</strong>',
    searchPlaceholder: 'بحث'
  }), _$$DataTable));
  $('.delete-button').click(function () {
    selectedRow = $(this).closest('tr');
    idSelectedRow = $(this).closest('tr').find(".hide_column").text();
    console.log(idSelectedRow);
    $('.confirm-delete').click(function () {
      selectedRow.remove();
    });
  });
  $(".show_hide").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $(".txt").attr("type", "text");
      $(".show_hide").addClass("fa-eye-slash").removeClass("fa-eye");
    } else {
      $(".txt").attr("type", "password");
      $(".show_hide").addClass("fa-eye").removeClass("fa-eye-slash");
    }
  });
  /* var login =document.getElementById("log"),
   pass= document.getElementById("pass"),
   user = document.getElementById("user");*/

  if ($("#user") === "1") {
    // window.location.href = "https://ahmed111222333.github.io/elrahma/sections.html";
    $(".up").addClass("d-block").removeClass("d-none");
  } else {} // window.open ("https://ahmed111222333.github.io/elrahma/import.html"); 
  //var mybutton = document.getElementById("b"),
  //  myin=document.getElementById("in");


  $("button#b").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $("input,select").prop("disabled", false);
      $(this).text("تاكيد");
    } else {
      $("input,select").prop("disabled", true);
      $(this).text("تعديل");
    }
  });
});