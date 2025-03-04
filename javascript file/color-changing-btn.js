let colors = ["slateblue", "lightblue", "skyblue", "deepskyblue", "dodgerblue", "royalblue", "blue", "mediumblue", "darkblue", "navy", "midnightblue"];  
let i = 0;
document.getElementById('color-changing-btn')
    .addEventListener('click', function(){
        document.body.style.backgroundColor = colors[i];
        i++;
        if(i > colors.length){
            i = 0;
        }
});