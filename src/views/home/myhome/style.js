import styled from 'styled-components'



export const HomeWrap = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`
export const HeaderWrap = styled.div`
  height: 80px;
  background: #0085ff;
  flex-shrink: 0;
`
export const TheaderWrap = styled.div`
  height: 16px;
  font-size: 20px;
  color: #fff;
  display: flex;
  padding-left: 13px;
  padding-top: 8px;
  .icon-weizhi{
    font-size: 20px;
  }
`

export const BheaderWrap = styled.div`
 height: 30px;
 padding-top: 12px;
 display: flex;
 .icon-fdj{
   font-size: 10px;
   color: #000;
   line-height: 30px;
   position: relative;
   left: 115px;
   top: 15px;
 }
`
export const MyInput = styled.div`
 position:sticky;
 top:0;
 background: #fff;
 height: 30px;
 width: 94%;
 font-size: 10px;
 color: #ccc;
 text-align: center;
 line-height: 30px;
 margin-top: 8px;
`
export const MyFdaJing = styled.div`
 font-size: 2px;
 color: #ccc;
`
export const HomeFooterWrap = styled.div`
 z-index: 10;
 display: flex;
 background: #fff;
 /* flex: 1; */
 justify-content: space-around;
 position: fixed;
 bottom: 0;
 height: 50px;
 width: 100%;
 border-top: 1px solid #ccc;
`
export const LeftFooterWrap = styled.div`
 a {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 6px;
  color: #ccc;
  text-decoration: none;
  margin-top: 3px;
 }
 .active{
    color: blue;
  }
`
export const PleftFooterWrap = styled.div`
 a {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 6px;
  color: #ccc;
  text-decoration: none;
  margin-top: 3px;
 }
 .active{
    color: blue;
  }
`
export const CenterFooterWrap = styled.div`
 a{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 6px;
  color: #ccc;
  text-decoration: none;
  margin-top: 3px;
 }
 .active{
    color: blue;
  }
`
export const RightFooterWrap = styled.div`
 a{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 6px;
  color: #ccc;
  text-decoration: none;
  margin-top: 3px;
 }
 .active{
    color: blue;
  }
`
export const HomeMapWrap = styled.div`
  /* flex-shrink: 0; */
  /* position: fixed;
  top: 80px; */
  height: 195px;
 .swiper-container{
   background: #fff;
   display: flex;
   .swiper-slide{
     padding-bottom: 34px;
     flex-wrap: wrap;
     display: flex;
     flex-direction: row;
    div{
    width:20%;
    margin-top: 8px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   font-size: 14px; 
  }
  img{
    width: 50px;
    height: 50px;
    padding-bottom: 4px;
    }
  }
 }
`
export const HomeTcenterWrap = styled.div`
  margin-bottom: 50px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  span{
    display: inline-block;
    width: 20px;
    height: 2px;
    background: #ccc;
    margin-bottom: 5px;
  }
  span:nth-child(1) {
    margin-right: 8px;
  }
  span:nth-child(2) {
    margin-left: 8px;
  }
`
export const HomeCcenterWrap = styled.div`
   position: relative;
   bottom: 50px;
`

// export const HomeCcenterWrap = styled.div`
//   display: flex;
//   height: 40px;
//   line-height: 40px;
//   margin-top: 20px;

//   height: 170px;
//   border-bottom: 1px solid #ccc;
//   display: flex;
//   padding-left: 10px;
//   img{
//     height: 80px;
//     width: 80px;
//   }
//   p:nth-child(1){
//     span{
//       display: inline-block;
//       width: 0;
//       height: 0;
//       border-top: 5px solid #000;
//       border-left: 4px solid #fff;
//       border-right: 4px solid #fff;
//       border-bottom: 4px solid #fff;
//       margin-left: 5px;
//     }
//   }
//   p{
//     flex: 1;
//     text-align: center;
//   }
// `
export const HomeDetailsWrap = styled.div`
  height: 170px;
  border-bottom: 1px solid #ccc;
  display: flex;
  padding-left: 10px;
  img{
    height: 80px;
    width: 80px;
  }
`
export const HomeIntroduceWrap = styled.div`

  margin-left: 10px;
  p:nth-child(1){
    span:nth-child(1){
      font-size: 16px;
      font-weight: 900;
    }
    span:nth-child(2){
      margin-left: 80px;
    }
  }
  p:nth-child(2){
    margin-top: -15px;
    span:nth-child(2){
      margin-left: 50px;
      font-size: 10px;
    }
  }
  p:nth-child(3){
    margin-top: -15px;
    span:nth-child(1){
      font-size: 6px;
    }
    span:nth-child(2){
      display: inline-block;
      width: 1px;
      height: 8px;
      background: #000;
      margin: 0 5px;
    }
    span:nth-child(3){
      font-size: 6px;
    }
    span:nth-child(4){
      margin-left: 100px;
      font-size: 6px;
    }
    span:nth-child(5){
      display: inline-block;
      width: 1px;
      height: 8px;
      background: #000;
      margin: 0 5px;
    }
    span:nth-child(6){
      font-size: 6px;
    }
  }
  p:nth-child(4){
      margin-top: -8px;
      span:nth-child(1){
        font-size: 6px;
        border: 1px solid #ccc;
      }
      span:nth-child(2){
        font-size: 6px;
        border: 1px solid #ccc;
        margin-left: 8px;
      }
    }
    p:nth-child(5){
      margin-top: 16px;
      span:nth-child(1){
        background-color: rgb(240, 115, 115);
        color: #fff;
        margin-right: 5px;
      }
      span:nth-child(2){
        font-size: -8px;
        width: 200px;
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        vertical-align: middle;
      }
      span:nth-child(3){
        font-size: 10px;
        color: #ccc;
        margin-left: 26px;
      }
      span:nth-child(4){
        display: inline-block;
        width: 0;
        height: 0;
        border-top: 5px solid #ccc;
        border-left: 4px solid #fff;
        border-right: 4px solid #fff;
        border-bottom: 4px solid #fff;
        margin-left: 5px;
      }
    }
    p:nth-child(6){
        margin-top: 15px;
        span:nth-child(1){
          background-color: rgb(112, 188, 70);
        }
        span:nth-child(2){
          font-size: 14px;
          margin-left: 5px;
        }
      }
`
// export const HomeHiddenWrap = styled.div`
//   display: none;
//   height: 80px;
//   background: green;
//   border-bottom: 1px solid #ccc;
//   padding-left: 100px;
//   p:nth-child(1){
//     span:nth-child(1){
//       background-color: rgb(240, 115, 115);
//     }
//     span:nth-child(2){
//       font-size: 12px;
//       margin-left: 5px;
//     }
//   }
//   p:nth-child(2){
//     margin-top: 15px;
//     span:nth-child(1){
//       background-color: rgb(153, 153, 153)
//     }
//     span:nth-child(2){
//       font-size: 12px;
//       margin-left: 5px;
//     }
//   }
//   p:nth-child(3){
//     margin-top: 15px;
//     span:nth-child(1){
//       background-color: rgb(153, 153, 153)
//     }
//     span:nth-child(2){
//       font-size: 12px;
//       margin-left: 5px;
//       width: 200px;
//       display: inline-block;
//       overflow: hidden;
//       white-space: nowrap;
//       text-overflow: ellipsis;
//       vertical-align: middle;
//     }
//   }
    
// `

