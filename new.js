(function (a) {
  (function inner() {
    var a;
    console.log(a++);
  })();
})(10);
// (function (t) {
//   (function inner() {
//     console.log(a++);
//   })();
// })(10);
(function (t) {
  (function inner() {
    console.log(++t);
  })();
})(10);

// const str ="my name is rayudu";

// const reverse=str.split('').reverse().join('');

// console.log(reverse)

// const getData =async() =>{
//     try{
//         const data=await axios.get(API);

//     }catch(error){

//     }
// }

// fetch('API').then(() =>{
//     console.log('success');
// }).catch(error){
//     console.log('error.message');
// }

// Promise.resolve((res) =>{
//     console.log(res)
// });

// const myPromise= new Promise((resolve,reject)) =>{
//     const success=true;

//     if(success){
//         resolve('')
//     }else{
//         reje
//     }
// }

// function search(query){
//     console.log('API calling',query)
// }

// let timeoutId;
// const searchInput =document.getElementById('search-input');
// searchInput.addEventListener('input', (e) =>{
//     clearTimeout(timeoutId);
//     timeoutId=setTimeout(()=>{
//         search(e.target.value);
//     },3000)
// })

// test('open succes modal on button click', () =>{
//     const {getBytext} = render(</Your/>);
//     const buton =getByText('click me');
//     event.onclick(button);
//     expect(getByText('success')).toBeintheDocument()
// })

// test('calls API on button click', async()=>{
//     const apiCall=jest.fn();
//     const button =getByText('clcik');
//     await waitFor(() =>expect(apiCall).tohaveBenn(1))
// })
