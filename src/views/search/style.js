import styled from 'styled-components';

export  const SearchWrap = styled.div`
background: #ccc;
  display:flex;
  height:100%;
  flex-direction: column;
  padding:0 10px;
  box-sizing: border-box;
`
export const SHeadWrap = styled.div`
  background: #fff;
  height:90px;
  width:100%;
  position:relative;
  .GetBack{
    height:40px;
    .Back{
      height:30px;
      width:30px;
      color:black;
      text-decoration:none;
      line-height:40px;
    }
  }
`

export const Search =styled.div`
height:50px;
background:blue;
padding:10px 0px;
box-sizing: border-box;
display:flex;
justify-content:space-between;
.icon-fdj{
  position:absolute;
  left:8px;
  margin-top:6px;
}
input{
  height:30px;
  flex:1;
  margin-right:10px;
  padding-left:30px;
  box-sizing: border-box;
}
.b-font{
  font-size:16px;
  line-height:25px;
  color:#000;
  border:0;
  background:#fff;
}
`
export const Content =styled.div`
flex:1;
background:#fff;
`
// export const SearchPage =styled.div`

// `
//search组件样式-------------------------------------------
export const History =styled.div`
.SeaHistory{
  height:30px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  .H-fsz{
    font-size:16px;
    font-weight:700;
  }
}
`
export const HistoryList =styled.div`
display:flex;
flex-wrap:wrap;
.H-list{
  height:36px;
  padding:0 10px;
  background-color: #f7f7f7;
  text-align:center;
  line-height:36px;
  font-size:16px;
  border-radius:6px;
  margin:8px 5px; 
}
`
export const HotList =styled.div`
.Hot-fsz{
  font-size:16px;
    font-weight:700;
}
`
//searchlist2 -------------------------------------
export const Listul =styled.div`

.shopList{
  display:flex;
  .Listimg{
    height: 55px;;
    width:55px;
    img{
      height:25px;
      margin:15px
    }
  }
  .Listfont{
    display:flex;
    align-items:center;
    border-bottom: 1px solid #e3e3e3;
    width:100%
    p{
      font-size:14px
    }
    .ListJian{
      background-color: rgb(250, 112, 71);
      color:#fff;
      margin-left:5px;
      font-size:12px;
    }
    .Listkudi{
      background-color: rgb(35, 149, 255);
      color:#fff;
      margin-left:5px;
      font-size:12px;
    }
    .Listpinfeng{
      position:absolute;
      right:20px;
      font-size:12px;
      color: #999;
    }
  }
}
`
export const Listul2 =styled.div`

.Listul2{
  display:flex;
  .iconSizi{
    height: 54px;;
    width:45px;
    line-height:54px;
    text-align:center;
  }
  .fontcont{
    line-height:54px;
    font-size:14px;
    border-bottom: 1px solid #e3e3e3;
    width:100%
  }
}
`