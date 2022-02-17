$(document).ready(function($) {

	$("#calcubaremo").find(".optsino").change(function() {
		$target = $(this).parents(".pregunta").next(".oculto");
		$target.find("input:text").val("0");
		actualizatotal();
		$target.slideToggle("fast");
		$("#calcubaremo div.info:visible").slideUp("fast");
		$("#calcubaremo .toggleinfo.activo").removeClass("activo");
	});

	$("#calcubaremo").find(".optsinodirecto").change(function() {
		calculadirecto($(this));
	});

	$("#calcubaremo").find(".toggleinfo").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("activo");
		$("#calcubaremo .toggleinfo.activo").not($(this)).removeClass("activo");
		var target = $(this).attr("rel");
		$("#calcubaremo div.info:visible").not($(this).parent().children("div.info" + target)).slideUp("fast");
		$(this).parent().children("div.info" + target).slideToggle("fast");
	});

	/* COMPRUEBA VALORES INTRODUCIDOS */

	$("#calcubaremo").find(".intronum").focus(function() {
		if ($(this).val() == "0") {
			$(this).val("");
		}
        $("#calcubaremo div.info:visible").slideUp("fast");
		$("#calcubaremo .toggleinfo.activo").removeClass("activo");
	});

	$("#calcubaremo").find(".intronum").blur(function() {
		if ($(this).val() == "") {
			$(this).val("0");
		}
	});

	$("#calcubaremo").find(".meses").blur(function() {
		if (parseInt($(this).val()) > 11) {
			$(this).val("11");
			calculaseccion(this);
		}
	});

	$("#calcubaremo").find(".seccion1").blur(function() {
		compruebaMaxSeccion1(this);
	});

	$("#calcubaremo").find(".nota").blur(function() {
		if (parseInt($(this).val()) > 10) {
			$(this).val("10");
            alert("El valor de la nota media debe ser menor de 10.")
			calculaseccion(this);
		}
        if (parseInt($(this).val()) < 5) {
			$(this).val("5");
            alert("El valor de la nota media debe ser mayor de 5.")
			calculaseccion(this);
		}
        
	});

	// ***** Permite solo escribir números: ****
	$("#calcubaremo").find(".intronum").keydown(function(e) {
		-1 !== $.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) || /65|67|86|88/.test(e.keyCode) && (!0 === e.ctrlKey || !0 === e.metaKey) || 35 <= e.keyCode && 40 >= e.keyCode || (e.shiftKey || 48 > e.keyCode || 57 < e.keyCode) && (96 > e.keyCode || 105 < e.keyCode) && e.preventDefault()
	});

	/* FUNCIÓN PARA COMPROBAR EL MÁXIMO DE 10 AÑOS EN LA SECCIÓN 1 */
  
  function compruebaMaxSeccion1(objeto) {
  	$numseccion = objeto.name.substring(4, 7);
    $mensaje = "ATENCIÓN: En el apartado de Experiencia docente previa se tendrá en cuenta un máximo de cinco años, cada uno de los cuales deberá ser valorado en uno solo de los subapartados.";
    
    if (parseInt($("input[name=data" + $numseccion + "x]").val()) > 5) {
    	$("input[name=data" + $numseccion + "x]").val("5");
      alert($mensaje);
    }
    
    if (parseInt($("input[name=data" + $numseccion + "x]").val()) == 5 && parseInt($("input[name=data" + $numseccion + "y]").val()) > 0) {
    	$("input[name=data" + $numseccion + "y]").val("0");
      alert($mensaje);
    }
    
    $totalAnos = parseInt($("input[name=data110x]").val()) + parseInt($("input[name=data120x]").val()) + parseInt($("input[name=data130x]").val()) + parseInt($("input[name=data140x]").val());
    $totalMeses = parseInt($("input[name=data110y]").val()) + parseInt($("input[name=data120y]").val()) + parseInt($("input[name=data130y]").val()) + parseInt($("input[name=data140y]").val());
    
    $totalAnos = $totalAnos + ($totalMeses/12);
    if ($totalAnos > 5) {
    	$("input[name=data" + $numseccion + "x]").val("0");
      $("input[name=data" + $numseccion + "y]").val("0");
      alert($mensaje);
    }
    calculaseccion(objeto);
  }
  
	/* FUNCIONES DE CÁLCULO DE CADA SECCIÓN */

	$("input[name^='data']").change(function() {
		calculaseccion(this);
	});

	function calculaseccion(objeto) {
		$numseccion = objeto.name.substring(4, 7);
        
		switch ($numseccion) {
			case "110":
			case "120":
			case "130":
			case "140":
				$ano = parseInt($("input[name=data" + $numseccion + "x]").val());
				$ano = (isNaN($ano)) ? 0 : $ano;
				$mes = parseInt($("input[name=data" + $numseccion + "y]").val());
				$mes = (isNaN($mes)) ? 0 : $mes;
				break;

			case "210":
                $num = parseFloat($("input[name=data" + $numseccion + "x]").val());
				$num = (isNaN($num)) ? 0 : $num;
				break;
                
			case "231":
			case "232":
			case "311":
			case "312":
				$num = parseInt($("input[name=data" + $numseccion + "x]").val());
				$num = (isNaN($num)) ? 0 : $num;
				break;

			case "240":
				$certmd = parseInt($("input[name=data" + $numseccion + "u]").val());
				$certmd = (isNaN($certmd)) ? 0 : $certmd;
				$certid = parseInt($("input[name=data" + $numseccion + "v]").val());
				$certid = (isNaN($certid)) ? 0 : $certid;
				$certap = parseInt($("input[name=data" + $numseccion + "w]").val());
				$certap = (isNaN($certap)) ? 0 : $certap;
				$certfp = parseInt($("input[name=data" + $numseccion + "x]").val());
				$certfp = (isNaN($certfp)) ? 0 : $certfp;
				$certtd = parseInt($("input[name=data" + $numseccion + "y]").val());
				$certtd = (isNaN($certtd)) ? 0 : $certtd;
				break;

			default:
				break;
		}

		switch ($numseccion) {
			case "110":
				$result = (1 * $ano) + (0.083 * $mes);
				break;

			case "120":
				$result = (0.5 * $ano) + (0.041 * $mes);
				break;

			case "130":
				$result = (0.5 * $ano) + (0.041 * $mes);
				break;
                
            case "140":
				$result =  (0.25 * $ano) + (0.020 * $mes);
				break;
                
			case "210":
				$result = ($num - 5) * 0.3;
				break;
            
            case "231":
            case "232":
				$result = 1 * $num;
				break;

			case "240":
				$result = 0.5 * ($certmd + $certid) + 0.2 * ($certap + $certfp + $certtd);
				break;
                
            case "311":
				$result = 0.05 * $num;
                if ($result > 1) {
                    $result = 1;
                }
				break;
            
            case "312":
				$result = 0.03 * $num;
                if ($result > 1.5) {
                    $result = 1.5;
                }
				break;

			default:
				break;
		}

		if ($result == 0) {
			$final = 0;
		} else {
			$final = $result.toFixed(4);
		}

		$("input[name=result" + $numseccion + "]").val($final);
		actualizatotal();
	}

	function calculadirecto(objeto) {
		$numseccion = objeto.attr('name').substring(4, 7);
		$valor = objeto.val();

		switch ($numseccion) {
			case "221":
				$result = 1;
				break;

			case "222":
				$result = 1;
				break;

			case "223":
				$result = 0.5;
				break;

			case "320":
				$result = 0.3;
				break;
            
            case "330":
				$result = 0.4;
				break;

			default:
				break;
		}

		if ($valor == 0) {
			$final = 0;
		} else {
			if ($result == 0) {
				$final = 0;
			} else {
				$final = $result.toFixed(4);
			}
		}

		$("input[name=result" + $numseccion + "]").val($final);
		actualizatotal();
	}

	/* CALCULA TOTALES */
	function actualizatotal() {
		var valormaximo = [0, 5, 5, 2];
		var sumatotal = 0;

		for (var sec = 1; sec <= 6; sec++) {
			var sumsec = 0;
			$("input[name^='result" + sec + "']").each(function() {
				sumsec += parseFloat($(this).val());
			});
			if (sumsec == 0) {
				$final = 0;
				$("input[name^='maxsec" + sec + "']").hide();
			} else {
				if (sumsec >= valormaximo[sec]) {
					sumsec = valormaximo[sec];
					$("input[name^='maxsec" + sec + "']").show();
				} else {
					$("input[name^='maxsec" + sec + "']").hide();
				}
				$final = sumsec.toFixed(4);
			}
			$("input[name=totalsec" + sec + "]").val($final);
			sumatotal += sumsec;
		}

		if (sumatotal == 0) {
			$final = 0;
		} else {
      if (sumatotal > 10) sumatotal = 10;
			$final = sumatotal.toFixed(4);
		}
    
		$("input[name=restotal]").val($final);
	}

});