function map_arr(){
    let cnt = 400;
    const noise = window.noise;

    arr = new Array(cnt);

    noise.seed(Math.random())
    for (var x = 0; x < cnt; x++) {
        arr[x] = new Array(cnt);
        for (var y = 0; y < cnt; y++) {
            var value = noise.perlin2(x / 100, y / 100)
            var col = color(Math.abs(value) * 256);
            if(col == "olive" && x > 3){
                arr[x - 2][y] = "green";
                arr[x - 1][y] = "green";
                arr[x][y] = "olive"
            }else{
                arr[x][y] = col
            }
        }
    }
    return arr;
}


function color(val){
    if(val > 130){
        // 海
        return "blue";
    }else if(val > 110){
        // 陸
        return "DCD3B2";
    }else if(val > 70){
        // 陸
        return "lime";
    }else if(val > 69.7){
        // 木
        return "olive";
    }else if(val > 45){
        // 陸
        return "lime";
    }else if(val > 22){
        // 砂
        return "DCD3B2";
    }else{
        return "skyblue";
    }
}