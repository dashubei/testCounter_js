'use strict';

{
    //飲み物のボタンタグを取得
    const coffee = document.getElementById('coffee');
    const tea = document.getElementById('tea');
    const milk = document.getElementById('milk');
    const coke = document.getElementById('coke');
    const beer = document.getElementById('beer');

    //飲み物のボタンタグから得られた料金を取得
    const coffeeFee = Number(coffee.value);
    const teaFee = Number(tea.value);
    const milkFee = Number(milk.value);
    const cokeFee = Number(coke.value);
    const beerFee = Number(coke.value);

    //それぞれのボタンが押された回数を取得するために変数に０を入れて定義する
    let coffeeCount = 0;
    let teaCount = 0;
    let milkCount = 0;
    let cokeCount = 0;
    let beerCount = 0;

    //合計注文数の計算
    let totalCount = 0;

    //合計金額の計算
    let totalFee = 0;

    
    coffee.addEventListener('click', () => {

        coffeeCount ++;
        document.getElementById('coffee-count').textContent = coffeeCount;

        totalCount ++;
        document.getElementById('count').textContent = totalCount;

        totalFee += coffeeFee;
        document.getElementById('price').textContent = totalFee;
    });

    tea.addEventListener('click', () => {

        teaCount ++;
        document.getElementById('tea-count').textContent = teaCount;

        totalCount ++;
        document.getElementById('count').textContent = totalCount;

        totalFee += teaFee;
        document.getElementById('price').textContent = totalFee
    });

    milk.addEventListener('click', () => {

        milkCount ++;
        document.getElementById('milk-count').textContent = milkCount;

        totalCount ++;
        document.getElementById('count').textContent = totalCount;

        totalFee += milkFee;
        document.getElementById('price').textContent = totalFee;
    });

    coke.addEventListener('click', () => {

        cokeCount ++;
        document.getElementById('coke-count').textContent = cokeCount;

        totalCount ++;
        document.getElementById('count').textContent = totalCount;

        totalFee += cokeFee;
        document.getElementById('price').textContent = totalFee;
    });

    beer.addEventListener('click', () => {

        beerCount ++;
        document.getElementById('beer-count').textContent = beerCount;

        totalCount ++;
        document.getElementById('count').textContent = totalCount;
        
        totalFee += beerFee;
        document.getElementById('price').textContent = totalFee;
    });
}