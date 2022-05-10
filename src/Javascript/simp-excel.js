let simpExValues=[[],[],[],[],[],[]];
let simpExInput = document.querySelectorAll(".simp-excel .input");
let columnLength = document.querySelectorAll(".simp-excel table tr th").length-1;
addEventToInputs();
function addEventToInputs(){
    for(let i=0;i<simpExInput.length;i++){
        simpExInput[i].addEventListener("focus",function(){
            let value = simpExValues[parseInt(i/columnLength)][i-parseInt(i/columnLength)*columnLength];
            if(value != null ||value != undefined)
            {
                this.innerText= value;
            }
           
        });
        
        simpExInput[i].addEventListener("input",function(){
            simpExValues[parseInt(i/columnLength)][i-parseInt(i/columnLength)*columnLength] = simpExInput[i].innerText.replaceAll(" ","");
            if(this.innerText.search(/=/i) >=0 ){
                this.style.color ="blue";
                this.style.fontWeight ="bolder";
                this.style.fontVariant ="small-caps";
            }
            else{
                restoreColumnStyle(i);
            }
        });
       
        simpExInput[i].addEventListener("keydown",function(e){
            if(e.keyCode == 13)
            {
                if(this.innerText.search(/=/i) >=0 ){
                    if(!isNaN(doCalc(this.innerText)))
                    {
                        this.innerText = doCalc(this.innerText);
                        this.contentEditable =false;
                        this.contentEditable =true;
                        restoreColumnStyle(i);
                    }
                }
            }
        });
        simpExInput[i].addEventListener("blur",function(){
            if(this.innerText.search(/=/i) >=0 ){
                if(!isNaN(doCalc(this.innerText)))
                {
                    this.innerText = doCalc(this.innerText);
                    this.contentEditable =false;
                    this.contentEditable =true;
                    restoreColumnStyle(i);
                }
            }
        });
    }
}

function restoreColumnStyle(no){
    simpExInput[no].style.color ="initial";
    simpExInput[no].style.fontWeight ="initial";
    simpExInput[no].style.fontVariant ="initial";
}
function doCalc(input){
    let sumPattern = /SUM\([A-C]{1}[1-6]{1}:[A-C]{1}[1-6]{1}\)/;
    let productPattern = /PROD\([A-C]{1}[1-6]{1}:[A-C]{1}[1-6]{1}\)/;
    let averagePattern = /AVER\([A-C]{1}[1-6]{1}:[A-C]{1}[1-6]{1}\)/;
    if(input.search(sumPattern) > 0){
        let values = findNumbers(findColumnsAndRow(input));
        if(values ==undefined || values.length <= 0)   {
            return;
        }
        return calcSum(values);
    }
    if(input.search(productPattern) > 0){
        let values = findNumbers(findColumnsAndRow(input));
        if(values ==undefined || values.length <= 0)   {
            return;
        }
        return calcProduct(values);
    }
    if(input.search(averagePattern) > 0){
        let values = findNumbers(findColumnsAndRow(input));
        if(values ==undefined || values.length <= 0)   {
            return;
        }
        return calcAverage(values);
    }
   
    return;
}
function findColumnsAndRow(input){
    //find something like A1:C1
    let rowColumn = input.match(/[A-C]{1}[1-6]{1}:[A-C]{1}[1-6]{1}/);
    if(rowColumn == null){
        return;
    }
    rowColumn = rowColumn.toString();
    //find start coordinate(row,colum) e.g A1 
    let rowColumnStart = rowColumn.match(/^[A-C]{1}[1-6]{1}/).toString();
    //find end coordinate(row,colum) e.g C1
    let rowColumnEnd = rowColumn.match(/[A-C]{1}[1-6]{1}$/).toString();
    if(rowColumnStart == null || rowColumnEnd == null){
        return;
    }
    rowColumnStart = rowColumnStart.toString();
    rowColumnEnd = rowColumnEnd.toString();
    let columns =['A','B','C','D'];
    //return [[startRow,startColumn],[endRow,endColumn]]
    selectedPoints ={
        "startRow":parseInt(rowColumnStart[1])-1,
        "startColumn":columns.indexOf(rowColumnStart[0]),
        "endRow":parseInt(rowColumnEnd[1])-1,
        "endColumn":columns.indexOf(rowColumnEnd[0])
    }
    return selectedPoints;
}

function findNumbers(selectedPoints){
    if(selectedPoints.startRow == selectedPoints.endRow){
        let arr = simpExValues[selectedPoints.startRow].slice(selectedPoints.startColumn,selectedPoints.endColumn+1);
        return arr.map(x=> {
            if(isNaN(parseFloat(x))){
                return doCalc(x);
            }
            return parseFloat(x); 
        }).filter(x => !isNaN(x));
    }
    if(selectedPoints.startColumn == selectedPoints.endColumn){
        let arr =[];
        for(let i=0;i<simpExValues.length;i++){
            arr[i]=simpExValues[i][selectedPoints.startColumn];
        }
        arr =arr.slice(selectedPoints.startRow,selectedPoints.endRow+1);
        return arr.map(x=> {
            if(isNaN(parseFloat(x))){
                return doCalc(x);
            }
            return parseFloat(x); 
        }).filter(x => !isNaN(x));
    }
    
    let arr = simpExValues.flat().map(x=> {
        if(isNaN(parseFloat(x))){
            return doCalc(x);
        }
        return parseFloat(x); 
    }).filter(x => !isNaN(x));
    return arr;
}

function calcSum(values){
    return values.reduce((acc,curr)=>{ return acc + curr; });
}
function calcAverage(values){
    return values.reduce((acc,curr)=>{ return acc + curr; })/values.length;
}
function calcProduct(values){
    return values.reduce((acc,curr)=>{ return acc * curr; });
}