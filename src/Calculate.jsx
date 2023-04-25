import React from 'react';
import {UseState} from 'react';


function Calculate() {
    
    class Month {
       

        constructor( Mon,Tue, Wed,Thurs,Fri){
            this.Mon=Mon;
            this.Tue=Tue;
            this.Wed=Wed;
            this.Thurs=Thurs;
            this.Fri=Fri;
        }
    }

    const Jan = new Month(5,5,4,4,4);
    const Feb = new Month(4,4,4,4,4);
    const March = new Month(4,4,5,5,5);
    const April = new Month(4,4,4,4,4);
    const May = new Month(5,5,5,4,4);
    const June = new Month(4,4,4,5,5);
    const July = new Month(5,4,4,4,4);
    const Aug = new Month(4,5,5,5,4);
    const Sep = new Month(4,4,4,4,5);
    const Oct = new Month(5,5,4,4,4);
    const Nov = new Month(4,4,5,5,4);
    const Dec = new Month(4,4,4,4,5);

   //const M = new Month();

   const [mouth,Setmouth] = UseState(Feb);
  
   const[total,setTotal] = UseState(0);

   return(
        <div >
            <h1>Hello Engineer</h1>
            <div>
                <p>
                    Click on the Month you want
                </p>
            </div>
           <nav>
           <button onClick={() => Setmouth(Jan)} >
                January
            </button>
            <button onClick={() => Setmouth(Feb)}>
                February
            </button>
            <button onClick={() => Setmouth(March)}>
                March
            </button>
            <button onClick={() => Setmouth(April)}>
                April
            </button>
            <button onClick={() => Setmouth(May)}>
                May
            </button>
            <button onClick={() => Setmouth(June)}>
                June
            </button>
           </nav>

           <nav>
           <button onClick={() => Setmouth(July)}>
                July
            </button>
            <button onClick={() => Setmouth(Aug)}>
                August
            </button>
            <button onClick={() => Setmouth(Sep)}>
                September
            </button>
            <button onClick={() => Setmouth(Oct)}>
                October
            </button>
            <button onClick={() => Setmouth(Nov)}>
                November
            </button>
            <button onClick={() => Setmouth(Dec)}>
                December
            </button>
           </nav>



          <div>
          <p>
            Click on the Days you have that lecture
          </p>
          <nav>
            <button /*onClick = {() => setTotal (total+mouth.Mon)} */>Monday</button>
            <button /*onClick = {() => setTotal(total+mouth.Tue)} */>Tuesday</button>
            <button>Wednesday</button>
            <button>Thursday</button>
            <button>Friday</button>

            

            

          </nav>
          </div>
          
            
        </div>
    );
}

export default Calculate;