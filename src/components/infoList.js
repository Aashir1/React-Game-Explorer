import React from 'react';
const styles={
    list:{
        display:'flex',
        alignItems: 'center',
    },
    imgWrapper:{
        width: '100px',
        height: '105px',
    },
    img:{
        width:'100%',
    },
    textWrapper:{
        marginLeft: '30px',
    }
}
let InfoList = (props) => {
    return (
      <ul>
      {
          props.listItems.map((eachItem, i)=>{
              return(
                <li key= {i} style={styles.list}>
                    <div style={styles.imgWrapper}>
                        <img style={styles.img} src={eachItem.imageURL} alt="image"/>
                    </div>
                    <div style={styles.textWrapper}>
                        <h3>{eachItem.name}</h3>
                        <p>{eachItem.releaseDate.slice(0,10)}</p>
                        <p><a href={eachItem.detailURL} target='_blank'>Details URL</a></p>
                    </div>
                </li>
            )
          })
      }
      </ul>
    );
  }

export default InfoList;