(function(){dust.register("sidebar",body_0);function body_0(chk,ctx){return chk.write("<div class=\"sidebar\"><ul class=\"views\">").section(ctx.get("views"),ctx,{"block":body_1},null).write("</ul><!--<div class=\"view-bar\"><div class=\"button\"><i class=\"icon-ios7-arrow-left\"></i></div><div class=\"menu\"><div class=\"current\">Cycle ").reference(ctx.get("current_cycle"),ctx,"h").write("</div><ul><li><a href=\"#/details/cycle/1\">Cycle 1</a></li><li><a href=\"#/details/cycle/2\">Cycle 2</a></li><li><a href=\"#/details/cycle/3\">Cycle 3</a></li><li><a href=\"#/details/cycle/4\">Cycle 4</a></li><li><a href=\"#/details/cycle/5\">Cycle 5</a></li><li><a href=\"#/details/cycle/6\">Cycle 6</a></li></ul></div><div class=\"button\"><i class=\"icon-ios7-arrow-right\"></i></div></div>--><h2>Courses</h2><ul class=\"courses\">").section(ctx.get("courses"),ctx,{"block":body_3},null).write("</ul><!--<h2>GPA</h2><ul><li><a href=\"#/gpa\">4.00</a></li></ul>--></div>");}function body_1(chk,ctx){return chk.write("<li").exists(ctx.get("selected"),ctx,{"block":body_2},null).write("><a href=\"#/").reference(ctx.get("route"),ctx,"h").write("\"><i class=\"").reference(ctx.get("icon"),ctx,"h").write("\"></i> <span class=\"title\">").reference(ctx.get("title"),ctx,"h").write("</span></a></li>");}function body_2(chk,ctx){return chk.write(" class=\"selected\"");}function body_3(chk,ctx){return chk.write("<li").exists(ctx.get("selected"),ctx,{"block":body_4},null).write("><a href=\"#/details/cycle/").reference(ctx.getPath(false,["global","cycle"]),ctx,"h").write("/course/").reference(ctx.get("period"),ctx,"h").write("\"><span class=\"title\">").reference(ctx.get("title"),ctx,"h").write("</span> <span class=\"average\">").reference(ctx.get("average"),ctx,"h").write("</span></a></li>");}function body_4(chk,ctx){return chk.write(" class=\"selected\"");}return body_0;})();