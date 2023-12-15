function Hello(){


  let myName='Shivani';
  let number =456;
  let fullName  = () => {
    return 'Shivani Puri';
  }

  return <p>
    MessageNo: {number}   I am your friend {fullName()}
  </p>
}
export default Hello;