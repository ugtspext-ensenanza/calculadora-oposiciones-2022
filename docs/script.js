$(document).ready(function (a) {
	function e(e) {
		switch ($numseccion = e.name.substring(4, 7), $numseccion) {
			case "111":
			case "112":
			case "113":
			case "121":
			case "122":
			case "123":
			case "410":
			case "420":
			case "430":
			case "640":
				$ano = parseInt(a("input[name=data" + $numseccion + "x]").val()), $ano = isNaN($ano) ? 0 : $ano, $mes = parseInt(a("input[name=data" + $numseccion + "y]").val()), $mes = isNaN($mes) ? 0 : $mes;
				break;
			case "321":
			case "322":
			case "323":
			case "650":
			case "660":
				$num = parseInt(a("input[name=data" + $numseccion + "x]").val()), $num = isNaN($num) ? 0 : $num;
				break;
			case "330":
				$certc2 = parseInt(a("input[name=data" + $numseccion + "u]").val()), $certc2 = isNaN($certc2) ? 0 : $certc2, $certc1 = parseInt(a("input[name=data" + $numseccion + "v]").val()), $certc1 = isNaN($certc1) ? 0 : $certc1, $certb2 = parseInt(a("input[name=data" + $numseccion + "w]").val()), $certb2 = isNaN($certb2) ? 0 : $certb2, $certb1 = parseInt(a("input[name=data" + $numseccion + "x]").val()), $certb1 = isNaN($certb1) ? 0 : $certb1, $certfp = parseInt(a("input[name=data" + $numseccion + "y]").val()), $certfp = isNaN($certfp) ? 0 : $certfp, $certmd = parseInt(a("input[name=data" + $numseccion + "z]").val()), $certmd = isNaN($certmd) ? 0 : $certmd;
				break;
			case "510":
			case "520":
			case "530":
				$hor = parseInt(a("input[name=data" + $numseccion + "x]").val()), $hor = isNaN($hor) ? 0 : $hor;
				break;
			case "610":
				$lib1 = parseInt(a("input[name=data" + $numseccion + "a]").val()), $lib1 = isNaN($lib1) ? 0 : $lib1, $lib2 = parseInt(a("input[name=data" + $numseccion + "b]").val()), $lib2 = isNaN($lib2) ? 0 : $lib2, $lib3 = parseInt(a("input[name=data" + $numseccion + "c]").val()), $lib3 = isNaN($lib3) ? 0 : $lib3, $lib4 = parseInt(a("input[name=data" + $numseccion + "d]").val()), $lib4 = isNaN($lib4) ? 0 : $lib4, $lib5 = parseInt(a("input[name=data" + $numseccion + "e]").val()), $lib5 = isNaN($lib5) ? 0 : $lib5, $lib6 = parseInt(a("input[name=data" + $numseccion + "f]").val()), $lib6 = isNaN($lib6) ? 0 : $lib6, $rev1 = parseInt(a("input[name=data" + $numseccion + "g]").val()), $rev1 = isNaN($rev1) ? 0 : $rev1, $rev2 = parseInt(a("input[name=data" + $numseccion + "h]").val()), $rev2 = isNaN($rev2) ? 0 : $rev2, $rev3 = parseInt(a("input[name=data" + $numseccion + "i]").val()), $rev3 = isNaN($rev3) ? 0 : $rev3;
				break;
			case "620":
				$proi1 = parseInt(a("input[name=data" + $numseccion + "i1]").val()), $proi1 = isNaN($proi1) ? 0 : $proi1, $proi2 = parseInt(a("input[name=data" + $numseccion + "i2]").val()), $proi2 = isNaN($proi2) ? 0 : $proi2, $proi3 = parseInt(a("input[name=data" + $numseccion + "i3]").val()), $proi3 = isNaN($proi3) ? 0 : $proi3, $proi0 = parseInt(a("input[name=data" + $numseccion + "i0]").val()), $proi0 = isNaN($proi0) ? 0 : $proi0, $pron1 = parseInt(a("input[name=data" + $numseccion + "n1]").val()), $pron1 = isNaN($pron1) ? 0 : $pron1, $pron2 = parseInt(a("input[name=data" + $numseccion + "n2]").val()), $pron2 = isNaN($pron2) ? 0 : $pron2, $pron3 = parseInt(a("input[name=data" + $numseccion + "n3]").val()), $pron3 = isNaN($pron3) ? 0 : $pron3, $pron0 = parseInt(a("input[name=data" + $numseccion + "n0]").val()), $pron0 = isNaN($pron0) ? 0 : $pron0, $proa1 = parseInt(a("input[name=data" + $numseccion + "a1]").val()), $proa1 = isNaN($proa1) ? 0 : $proa1, $proa2 = parseInt(a("input[name=data" + $numseccion + "a2]").val()), $proa2 = isNaN($proa2) ? 0 : $proa2, $proa3 = parseInt(a("input[name=data" + $numseccion + "a3]").val()), $proa3 = isNaN($proa3) ? 0 : $proa3, $proa0 = parseInt(a("input[name=data" + $numseccion + "a0]").val()), $proa0 = isNaN($proa0) ? 0 : $proa0;
				break;
			case "630":
				$prei1 = parseInt(a("input[name=data" + $numseccion + "i1]").val()), $prei1 = isNaN($prei1) ? 0 : $prei1, $prei2 = parseInt(a("input[name=data" + $numseccion + "i2]").val()), $prei2 = isNaN($prei2) ? 0 : $prei2, $prei3 = parseInt(a("input[name=data" + $numseccion + "i3]").val()), $prei3 = isNaN($prei3) ? 0 : $prei3, $pren1 = parseInt(a("input[name=data" + $numseccion + "n1]").val()), $pren1 = isNaN($pren1) ? 0 : $pren1, $pren2 = parseInt(a("input[name=data" + $numseccion + "n2]").val()), $pren2 = isNaN($pren2) ? 0 : $pren2, $pren3 = parseInt(a("input[name=data" + $numseccion + "n3]").val()), $pren3 = isNaN($pren3) ? 0 : $pren3, $prea1 = parseInt(a("input[name=data" + $numseccion + "a1]").val()), $prea1 = isNaN($prea1) ? 0 : $prea1, $prea2 = parseInt(a("input[name=data" + $numseccion + "a2]").val()), $prea2 = isNaN($prea2) ? 0 : $prea2, $prea3 = parseInt(a("input[name=data" + $numseccion + "a3]").val()), $prea3 = isNaN($prea3) ? 0 : $prea3, $comp1 = parseInt(a("input[name=data" + $numseccion + "c1]").val()), $comp1 = isNaN($comp1) ? 0 : $comp1, $comp2 = parseInt(a("input[name=data" + $numseccion + "c2]").val()), $comp2 = isNaN($comp2) ? 0 : $comp2, $comp3 = parseInt(a("input[name=data" + $numseccion + "c3]").val()), $comp3 = isNaN($comp3) ? 0 : $comp3, $comp4 = parseInt(a("input[name=data" + $numseccion + "c4]").val()), $comp4 = isNaN($comp4) ? 0 : $comp4, $comp5 = parseInt(a("input[name=data" + $numseccion + "c5]").val()), $comp5 = isNaN($comp5) ? 0 : $comp5, $comp6 = parseInt(a("input[name=data" + $numseccion + "c6]").val()), $comp6 = isNaN($comp6) ? 0 : $comp6, $conc1 = parseInt(a("input[name=data" + $numseccion + "m1]").val()), $conc1 = isNaN($conc1) ? 0 : $conc1, $conc2 = parseInt(a("input[name=data" + $numseccion + "m2]").val()), $conc2 = isNaN($conc2) ? 0 : $conc2, $conc3 = parseInt(a("input[name=data" + $numseccion + "m3]").val()), $conc3 = isNaN($conc3) ? 0 : $conc3, $conc4 = parseInt(a("input[name=data" + $numseccion + "m4]").val()), $conc4 = isNaN($conc4) ? 0 : $conc4, $expo1 = parseInt(a("input[name=data" + $numseccion + "e1]").val()), $expo1 = isNaN($expo1) ? 0 : $expo1, $expo2 = parseInt(a("input[name=data" + $numseccion + "e2]").val()), $expo2 = isNaN($expo2) ? 0 : $expo2
		}
		switch ($numseccion) {
			case "111":
				$ano >= 3 ? $result = 6 * ($ano - 3) + .5 * $mes + 8 : $ano >= 2 ? $result = 4 * ($ano - 2) + .3333 * $mes + 4 : $result = 2 * $ano + .1666 * $mes;
				break;
			case "112":
			case "113":
			case "121":
				$result = 2 * $ano + .1666 * $mes;
				break;
			case "122":
				$result = 1.5 * $ano + .125 * $mes;
				break;
			case "123":
				$result = .75 * $ano + .0625 * $mes;
				break;
			case "321":
				$result = 5 * $num;
				break;
			case "322":
			case "323":
				$result = 3 * $num;
				break;
			case "330":
				$result = 4 * $certc2 + 3 * $certc1 + 2 * ($certb2 + $certfp) + 1.5 * $certmd + 1 * $certb1;
				break;
			case "410":
				$result = 4 * $ano + .3333 * $mes;
				break;
			case "420":
				$result = 2.5 * $ano + .2083 * $mes;
				break;
			case "430":
				$result = 1 * $ano + .0833 * $mes, $result > 5 && ($result = 5);
				break;
			case "510":
				$result = .1 * Math.floor($hor / 10), $result > 6 && ($result = 6);
				break;
			case "520":
				$result = .1 * Math.floor($hor / 3), $result > 3 && ($result = 3);
				break;
			case "530":
				$result = $hor;
				break;
			case "610":
				$result = 1 * $lib1 + .5 * $lib2 + .4 * $lib3 + .3 * $lib4 + .2 * $lib5 + .1 * $lib6 + .2 * $rev1 + .1 * $rev2 + .05 * $rev3, $result > 8 && ($result = 8);
				break;
			case "620":
				$result = 1.5 * $proi1 + 1 * $proi2 + .6 * $proi3 + .4 * $proi0 + 1 * $pron1 + .75 * $pron2 + .5 * $pron3 + .3 * $pron0 + .5 * $proa1 + .25 * $proa2 + .1 * $proa3 + .08 * $proa0, $result > 2.5 && ($result = 2.5);
				break;
			case "630":
				$result = 1.5 * $prei1 + 1 * $prei2 + .6 * $prei3 + 1 * $pren1 + .75 * $pren2 + .5 * $pren3 + .5 * $prea1 + .25 * $prea2 + .1 * $prea3 + 1 * $comp1 + .5 * $comp2 + .4 * $comp3 + .3 * $comp4 + .2 * $comp5 + .1 * $comp6 + 1 * $conc1 + 1 * $conc2 + .5 * $conc3 + .25 * $conc4 + .75 * $expo1 + .375 * $expo2, $result > 2.5 && ($result = 2.5);
				break;
			case "640":
				$result = 1.5 * $ano + .12 * $mes;
				break;
			case "650":
				$result = .5 * $num;
				break;
			case "660":
				$result = .1 * $num
		}
		0 == $result ? $final = 0 : $final = $result.toFixed(4), a("input[name=result" + $numseccion + "]").val($final), n()
	}

	function n() {
		for (var e = [0, 1e4, 5, 10, 20, 10, 15], n = 0, $ = 1; $ <= 6; $++) {
			var i = 0;
			a("input[name^='result" + $ + "']").each(function () {
				i += parseFloat(a(this).val())
			}), 0 == i ? ($final = 0, a("input[name^='maxsec" + $ + "']").hide()) : (i >= e[$] ? (i = e[$], a("input[name^='maxsec" + $ + "']").show()) : a("input[name^='maxsec" + $ + "']").hide(), $final = i.toFixed(4)), a("input[name=totalsec" + $ + "]").val($final), n += i
		}
		$final = 0 == n ? 0 : n.toFixed(4), a("input[name=restotal]").val($final)
	}
	a("#calcubaremo").find(".optsino").change(function () {
		$target = a(this).parents(".pregunta").next(".oculto"), $target.find("input:text").val("0"), n(), $target.slideToggle("fast"), a("#calcubaremo div.info:visible").slideUp("fast"), a("#calcubaremo .toggleinfo.activo").removeClass("activo")
	}), a("#calcubaremo").find(".optsinodirecto").change(function () {
		! function (e) {
			switch ($numseccion = e.attr("name").substring(4, 7), $valor = e.val(), $numseccion) {
				case "200":
					$result = 5;
					break;
				case "311":
					a("input[name=result313]").val("0"), $result = 5;
					break;
				case "312":
					$result = 3;
					break;
				case "313":
					5 == parseInt(a("input[name=result311]").val()) ? $result = 0 : $result = 2;
					break;
				case "314":
					$result = 1
			}
			0 == $valor && "311" == $numseccion && 1 == a("input[name=opti313").val() && a("input[name=result313").val("2.000");
			0 == $valor ? $final = 0 : 0 == $result ? $final = 0 : $final = $result.toFixed(4);
			a("input[name=result" + $numseccion + "]").val($final), n()
		}(a(this))
	}), a("#calcubaremo").find(".toggleinfo").click(function (e) {
		e.preventDefault(), a(this).toggleClass("activo"), a("#calcubaremo .toggleinfo.activo").not(a(this)).removeClass("activo");
		var n = a(this).attr("rel");
		a("#calcubaremo div.info:visible").not(a(this).parent().children("div.info" + n)).slideUp("fast"), a(this).parent().children("div.info" + n).slideToggle("fast")
	}), a("#calcubaremo").find(".intronum").focus(function () {
		"0" == a(this).val() && a(this).val("")
	}), a("#calcubaremo").find(".intronum").blur(function () {
		"" == a(this).val() && a(this).val("0")
	}), a("#calcubaremo").find(".meses").blur(function () {
		parseInt(a(this).val()) > 11 && (a(this).val("11"), e(this))
	}), a("#calcubaremo").find(".intronum").keydown(function (e) {
		-1 !== a.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) || /65|67|86|88/.test(e.keyCode) && (!0 === e.ctrlKey || !0 === e.metaKey) || 35 <= e.keyCode && 40 >= e.keyCode || (e.shiftKey || 48 > e.keyCode || 57 < e.keyCode) && (96 > e.keyCode || 105 < e.keyCode) && e.preventDefault()
	}), a("input[name^='data']").change(function () {
		e(this)
	})
});