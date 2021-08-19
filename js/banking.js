

// handle deposite button event

document.getElementById('deposit-button').addEventListener('click',function(){
 
    const depositInput=document.getElementById('deposit-input');
    const newdepositAmount=depositInput.value;
    
     // update deposit total
    const depositTotal=document.getElementById('deposite-total');
    const previousDepositAmount=depositTotal.innerText;
    const newDepositTotal=parseFloat(previousDepositAmount)+parseFloat(newdepositAmount);
    depositTotal.innerText=newDepositTotal;

    // update account balance
     const balanceTotal=document.getElementById('balance-total'); 

     const previousBalanceTotal=balanceTotal.innerText;
     
     const newBalanceTotal=parseFloat(previousBalanceTotal)+parseFloat(newdepositAmount);

     balanceTotal.innerText=newBalanceTotal;

    //clear the deposite input field
     depositInput.value=''; 
});

// handle withdraw event hanlder

document.getElementById('withdraw-button').addEventListener('click',function(){

    const withdrawInput =document.getElementById('withdraw-input');
    const newWithdrawAmount=withdrawInput.value;

    // update withdraw amount
   const withdrawTotal=document.getElementById('withdraw-total');
   const previousWithdrawTotal=withdrawTotal.innerText;

    const newWithdrawTotal=parseFloat(newWithdrawAmount)+parseFloat(previousWithdrawTotal);
    withdrawTotal.innerText=newWithdrawTotal;

   const balanceTotalWithdraw=document.getElementById('balance-total');
   const previousBalanceTotalWithdraw=balanceTotalWithdraw.innerText;

   const afterwithdrawTotal= parseFloat(previousBalanceTotalWithdraw) - parseFloat(newWithdrawAmount);
   balanceTotalWithdraw.innerText=afterwithdrawTotal;


//clear the deposite input field
withdrawInput.value='';
});