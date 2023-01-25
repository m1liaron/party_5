try{
    document.querySelector('active').addEventListener('click', ()=>{
        console.log('active clicked');
    });
} catch(e) {
    console.log(`Тут такого нема дун-дук${e}`);
}

// try {
//     console.log('Normal');
//     console.log(f);
//     console.log('result');
// }catch(error){
//    console.log(error.name);
//    console.log(error.message);
//    console.log(error.stack);
// } finally {
// }

// console.log('Still normal');