class restaurantManager {

    restaurantList = [
      
        {
            id: 1,
            restaurantName: 'KFC',
            address: 'Anand Vihar',
            city: 'Delhi'
        },
        {
            id: 2,
            restaurantName: 'Domino',
            address: 'Savita Vihar',
            city: 'Delhi'
        },
        {
            id: 3,
            restaurantName: 'Burger King',
            address: 'Civil Lines',
            city: 'Pune'
        },
        {
            id: 4,
            restaurantName: 'Subway',
            address: 'Cantonment',
            city: 'Mumbai'
        }

    ];
    

    printAllRestName() {
        return this.restaurantList.map(item=>item.restaurantName);
    }

    filterRestaurantByCity(cityName){
        return this.restaurantList.filter(item=> item.city == cityName);
    }

}


const restaurantObject = new restaurantManager();

const output1 = restaurantObject.printAllRestName();

document.getElementById('restName').innerText=output1;



function searchFunction(){
    const resValue=document.getElementById('searchit').value
    const output2 = restaurantObject.filterRestaurantByCity(resValue);
    const output2Json=JSON.stringify(output2);

    document.getElementById('details').innerText=output2Json
}






const orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
  };
  

  const total =Object.values(orderData).reduce(sum)
  
  function sum(pre, next){
      return pre+next;
  }
  

  const headers = Object.keys(orderData)

  const response=headers.map(function (item, index) { 
      return {
        'id':index+1,
        'restaurantName':'Punjabi Tadka',
        'order':item,
        'percentage':((orderData[item]/total)*100).toFixed(2)
      }
   })


  