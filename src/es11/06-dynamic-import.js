const button= document.getElementById('btn')

button.addEventListener('click', async () => {
    const module = await import('./07-module.js');
    console.log(module);
    module.hello();

})