import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { NavLink } from 'react-router-dom';


export default function breadcrumbs({data}) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <NavLink to="/" color="inherit" >
        Home
      </NavLink>
      {
          data.map((d, i) => {
              if(i < data.length - 1){
                return (
                    <NavLink to={d.url} color="inherit" key={i}>
                        {d.name}
                    </NavLink>
                  )
              }else{
                return (
                    <Typography color="textPrimary" key={i}>{d.name}</Typography>
                  )
              }
          })
      }
    </Breadcrumbs>
  );
}
