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

    // type AreaStr = {
    //     height: string;
    //     width: string;
    // }
    //keyof operator
    type AreaStr = {
        [key in keyof AreaNum]: string; // mapped type //keyof shows the keys of AreaNum
    }

    
}