import React from 'react';
import Items from './Items';

// The Object.keys method is used to extract the keys (categories) from an object. here category ko key liye because category wise hi sari input values to array me store kr rhe h. to props.data object ki keys category me iterate kiye map use krke. Fir each category ke liye ek div liye jiske key bhi catogery hi de diye aur heading le liye us div ki category(Electronic, or Food Items etc..) ne name se hi. Then ul ke andar perticular category me map kiye as item and for each item ke liye Item compo ko render liye as a list show krne ke liye

const List = (props) => {
  return (
    <div>
      <h2>Products</h2>
      {Object.keys(props.data).map((category) => (
        <div key={category}> {/**ye pehla map category key ke liye use kiye object.keys se keys extract krke jo category hi h taki for each category hm hr category ko as key denore kre aur uski heading bhi le */}
          <h3>{category}</h3>
          <ul> {/**fir ye dusra map data ki category ke values ke liye map chalaye taki hr category array ke andar ke items ko map krke Item me pass krke show kre key(id) ke according data visualition gitIgnore me h */}
            {props.data[category].map((item) => ( 
              <Items key={item.id} {...item}  data={props.data}  
              setData={props.setData} /> 
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default List;