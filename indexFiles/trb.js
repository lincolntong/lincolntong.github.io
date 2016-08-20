$(function(){
    //全屏
    $('#fullpage').fullpage({
        sectionsColor: ['#1bbc9b', '#141414', '#999999', '#5bc0de','#f91'],
        anchors:['page1', 'page2', 'page3', 'page4','page5','page6'],
        menu: '#menu',
        afterLoad: function(anchorLink, index){
              $('em').hide();   
            if(index == 3){
                //技能条
                (function(){
                    var oli=$('.s3-ul1 li');
                    oli.each(function(){ 
                        iText=$(this).find('em').text();
                        $(this).find('.s3-ico').animate({'width':iText},1000);
                    });
                })();
            }
        },
        onLeave: function(index, direction) {
            if (index == '3') {
                //技能条
                (function(){
                    var oli=$('.s3-ul1 li');
                  
                    oli.each(function(){
                        iText=$(this).find('em').text();
                        $(this).find('.s3-ico').animate({'width':'50px'},1000);
                    });
                })();
            }
        }
    });
    //字体闪烁
    (function(){
        var oTitle=$('.section1 .title');

        function autoPlay(){
            oTitle.animate({'opacity':0.3},1000).animate({'opacity':1},1000);
        }
        setInterval(autoPlay,2000);
    })();

    //城市幻灯
    (function(){
        var oli=$('.s1-ul li');
        var iNum=0;

        function autoPlay(){
            if(iNum>(oli.length-1)){
                iNum=0;
            }
            oli.fadeOut().eq(iNum).fadeIn(1000);
            iNum++;
        }
        setInterval(autoPlay,6000);
    })();

    //钢琴键
    (function(){
        var oli=$('.s2-ul li');
        var music=document.getElementById("music");
        var iNum=0;

        oli.hover(function(){
            iNum=$(this).index();
            music.src="music/g"+(41+iNum)+".mp3";
            music.play();
            $(this).find('.s2-line-btn').css({'opacity':1},500);
        },function(){
            music.pause();
            $(this).find('.s2-line-btn').css({'opacity':0.5},500);
        });
    })();

    //图片放大
    (function(){
        var oli=$('.s4-ul li');
        var oImg=$('.section4 .s4-show');
        var oArr=['glrd.png','jro.png','sxjl.png','慕课网.png'];
        var iNum=0;

        oli.hover(function(){
            $(this).find('p').show();
            $(this).mousemove(function(ev){
                iNum=$(this).index();
                oImg.attr('src','indexFiles/images/'+oArr[iNum]).css('left',(ev.pageX-300)).show();
            });

        },function(){
            oImg.hide();
            $(this).find('p').hide();
        });
    })();

});