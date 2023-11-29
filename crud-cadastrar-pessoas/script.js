$(document).ready(function() {
  $("#btnNovo").click(function() {
    // Reinicia a validação e remove as classes de validação
    $("#formulario")[0].reset();
    $("#formulario .form-control").removeClass("is-valid is-invalid");

    $("#formulario").show();
    $("#listaPessoas").hide();
  });

  $("#btnCancelar").click(function() {
    $("#formulario").hide();
    $("#listaPessoas").show();
  });

  $("#btnSalvar").click(function() {
    $("#loading").show();

    // Realiza a validação dos campos
    var nome = $("#nome").val();
    var peso = $("#peso").val();
    var idade = $("#idade").val();
    var isValid = true;

    if (!nome) {
      isValid = false;
      $("#nome").addClass("is-invalid");
    } else {
      $("#nome").removeClass("is-invalid");
      $("#nome").addClass("is-valid");
    }

    if (!peso) {
      isValid = false;
      $("#peso").addClass("is-invalid");
    } else {
      $("#peso").removeClass("is-invalid");
      $("#peso").addClass("is-valid");
    }

    if (!idade) {
      isValid = false;
      $("#idade").addClass("is-invalid");
    } else {
      $("#idade").removeClass("is-invalid");
      $("#idade").addClass("is-valid");
    }

    // Se os campos forem válidos, adiciona uma nova linha na tabela
    if (isValid) {
      var newRow = $("<tr>");
      var cols = "";

      cols += '<td>' + nome + '</td>';
      cols += '<td>' + peso + '</td>';
      cols += '<td>' + idade + '</td>';
      cols += '<td><button class="btn btn-warning btn-edit">Editar</button> <button class="btn btn-danger btn-delete">Excluir</button></td>';

      newRow.append(cols);
      $("tbody").append(newRow);

      $("#formulario")[0].reset(); // Reinicia o formulário
      $("#formulario .form-control").removeClass("is-valid is-invalid"); // Remove as classes de validação
      $("#formulario").hide();
      $("#listaPessoas").show();
      $("#loading").hide();
    } else {
      $("#loading").hide();
    }
  });

  // Ação do botão Excluir
  $(document).on("click", ".btn-delete", function() {
    $(this).closest("tr").remove();
  });

  // Ação do botão Editar
  $(document).on("click", ".btn-edit", function() {
    var currentRow = $(this).closest("tr");
    var cols = currentRow.find("td");

    // Preenche o formulário com os dados da linha selecionada
    $("#nome").val(cols[0].innerText);
    $("#peso").val(cols[1].innerText);
    $("#idade").val(cols[2].innerText);

    $("#formulario").show();
    $("#listaPessoas").hide();

    currentRow.remove();
  });
});
