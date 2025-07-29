{
    // mapped types

    const arrNum : number[] = [1, 2, 3];
    //const arrStr : string[] = ['1', '2', '3'];

    const arrStr : string[] = arrNum.map((number) =>
        number.toString()
    );

    console.log(arrStr)

    type AreaNum = {
        height: number;
        width: number;
    }

    type Height = AreaNum['height']; // lookup type
    // type AreaStr = {
    //     height: string;
    //     width: string;
    // }
    //keyof operator
    type AreaSt = {
        [key in keyof AreaNum]: string; // mapped type
    }
    const area :AreaSt = {
        height: '10',
        width: '20'
    }
    
    // T => {height: string, width: number}
    // key => "height" | "width" 
    type AreaStr <T> ={
        [key in keyof T]: T[key]; // mapped type //keyof shows the keys of AreaNum
    }

    const area1 : AreaStr<{height:string, width:number}> = {
        height: '10',
        width: 20
    }
    
}