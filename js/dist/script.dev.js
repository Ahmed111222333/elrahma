"use strict";

var table = $('#example').DataTable({
  dom: "B<'row'<'col-sm-6 col-md-6'f><'ml-3'l>>rtip",
  "paging": false,
  "ordering": false,
  "info": false,
  "scrollX": true,
  buttons: [{
    extend: "print",
    exportOptions: {
      columns: ":visible",
      autoPrint: true,
      orientation: "landscape"
    }
  }, {
    extend: "csv",
    exportOptions: {
      columns: ":visible",
      autoPrint: true,
      orientation: "landscape"
    }
  }, {
    extend: "pdf",
    exportOptions: {
      columns: ":visible",
      autoPrint: true,
      orientation: "landscape"
    }
  }, {
    extend: "excel",
    exportOptions: {
      columns: ":visible",
      autoPrint: true,
      orientation: "landscape"
    }
  }, {
    extend: "copy",
    exportOptions: {
      columns: ":visible",
      autoPrint: true,
      orientation: "landscape"
    }
  }, "colvis"],
  "language": {
    search: '<strong style="display:none">البحث</strong>',
    searchPlaceholder: 'بحث'
  },
  columnDefs: [{
    targets: [-1],
    className: "hide_column"
  }]
});
$('.delete-button').click(function () {
  selectedRow = $(this).closest('tr');
  idSelectedRow = $(this).closest('tr').find(".hide_column").text();
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