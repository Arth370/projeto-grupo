const naoFaca = document.querySelector('#nao')
const nuncaParo = document.querySelector('#nunca')
const flores = document.querySelector('#flores')
const ruminho = document.querySelector('#rumo')
const videos = document.querySelector('#video')
naoFaca.addEventListener('click',()=>{
    videos.src='/musicas/naomeFaca.mp4'
})
nuncaParo.addEventListener('click',()=>{
    videos.src='/musicas/NuncaParo.mp4'
})
flores.addEventListener('click',()=>{
    videos.src='/musicas/Flores.mp4'
})
ruminho.addEventListener('click',()=>{
    videos.src='/musicas/Rumo.mp4'
})