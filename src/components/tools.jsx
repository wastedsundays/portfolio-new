import { useState, useEffect, useRef } from 'react';
import Isotope from 'isotope-layout';
/* eslint-disable react/prop-types */

  const Tools = (props) => {

    // init one ref to store the future isotope object
    const isotope = useRef()
    // store the filter keyword in a state
    const [filterKey, setFilterKey] = useState('*')
  
    // initialize an Isotope object with configs 
    useEffect(() => {
      isotope.current = new Isotope('.filter-container', {
        itemSelector: '.filter-item',
        layoutMode: 'fitRows',
      })
      // cleanup
      return () => isotope.current.destroy()
    }, [])
    

    // handling filter key change
    useEffect(() => {
      filterKey === '*'
        ? isotope.current.arrange({filter: `*`})
        : isotope.current.arrange({filter: `.${filterKey}`})
    }, [filterKey])

    const handleFilterKeyChange = key => () => {
        //this checks if the button is already highlighted. If it is, it unclicks it and sets the filter to ALL      
        if (document.getElementById(key).classList.contains('button-checked')){
          //this prevents the unclick IF all is selected and already highlighted.
          if (key==="*") { 
            return
          } else {
            //this now runs. (Button highlighted, and clicked again....resets filter to ALL)
            document.getElementById(key).classList.remove('button-checked');
            document.getElementById('*').classList.add('button-checked');
            setFilterKey('*');
          }
        } else {
          //this runs if we've clicked a button that isn't highlighted.
          const removebuttons = Array.from(document.getElementsByClassName('button-checked'));
          removebuttons.forEach(button => {
          button.classList.remove('button-checked');
        });
        document.getElementById(key).classList.add('button-checked');
        setFilterKey(key);
        }
    } //end of handleFilterKeyChange


    return (
        <div>
            <div>
                    <div className="selector-buttons">
                        <button className='button-checked' id="*" onClick={handleFilterKeyChange('*')}>All</button>
                        <button className='' id="Favourite" onClick={handleFilterKeyChange('Favourite')}>Favourites</button>
                        <button className='' id="Development" onClick={handleFilterKeyChange('Development')}>Develop</button>
                        <button className='' id="Design" onClick={handleFilterKeyChange('Design')}>Design</button>
                        <button className='' id="Other" onClick={handleFilterKeyChange('Other')}>Other</button>
                    </div>
                    <hr />
                                      
                    <ul className='filter-container'>
                            {props.data.map((projects, i) => 
                                        <div className= {`filter-item ${projects.acf.tool_category.join(" ")}`} key={i}>
                                            <img src={projects.acf.tool_image} alt={`Small card showing ${projects.title.rendered} logo with name in text underneath`}/>
                                        </div>
                                    )
                                }
                    </ul>
            </div>

        </div>
        
    )

}

export default Tools