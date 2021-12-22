import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterProgram } from '../../redux/actions/programActions'
import { Button } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FilterModal = (props) => {
  const dispatch = useDispatch()
  const [check, setCheck] = useState([])



  const handleCheck = (e) => {
    let arr = [...check]
    let clicked = e.target.value
    let checkfinish = arr.indexOf(clicked)

    if (checkfinish === -1) {
      arr.push(clicked);
    } else {
      arr.splice(checkfinish, 1);
    }
    setCheck(arr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    myfun();
    Submit();
    dispatch(filterProgram(check));
    //props.showFilterModalBtn(false);
  };
  const Submit = () => toast("submit successflly");
  function myfun() {
    var a = document.forms.container;
    var i = 0;
    for(i; i<a.length; i++) {
      if(a[i].checked == true)
        return true;
    }
    document.getElementById("message").innerHTML = "please select anyone"
    return false;
  };

  
  return (
    <form name="forms" onSubmit={handleSubmit}>
      <h4>Course Categoy</h4>
      <ul>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'row',
            listStyle: 'none',
          }}
        >
          <li>
            <input
              type='checkbox'
              onChange={handleCheck}
              name="container"
              value='free'
              checked={check.includes('free')}
            />
            <label className="m-3">
              <h4>Free</h4>
            </label>
          </li>
          <li>
            <input
              type='checkbox'
              value='paid'
              name='container'
              onChange={handleCheck}
              checked={check.includes('paid')}
            />
            <label className='m-3'>
              <h4>Paid</h4>
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              value="subscription"
              name="container"
              onChange={handleCheck}
              checked={check.includes('subscription')}
            />
            <label className="m-3">
              <h4>Subscription</h4>
            </label>
          </li>
          <div>
            <p id="message" style={{ background: "red" }}></p>
          </div>
        </div>
      </ul>

      <h4>Duration</h4>
      <ul>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'row',
            listStyle: 'none',
          }}
        >
          <li>
            <input type="checkbox" />
            <label className="m-3">
              <h4>3 Months</h4>
            </label>
          </li>
          <li>
            <input type="checkbox" />
            <label className="m-3">
              <h4>6 Months</h4>
            </label>
          </li>
        </div>
      </ul>

      <h4>Level</h4>
      <ul>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'row',
            listStyle: 'none',
          }}
        >
          <li>
            <input type="checkbox" />
            <label className="m-3">
              <h4>Beginner</h4>
            </label>
          </li>
          <li>
            <input type="checkbox" />
            <label className="m-3">
              <h4>Advanced</h4>
            </label>
          </li>
          <li>
            <input type="checkbox" />
            <label className="m-3">
              <h4>Master</h4>
            </label>
          </li>
        </div>
      </ul>
      {/* Guarenteed */}

      <h4> Guarenteed</h4>

      <ul>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'row',
            listStyle: 'none',
          }}
        >
          <li>
            <input type="checkbox" />
            <label className="m-3">
              <h4>Interview</h4>
            </label>
          </li>
          <li>
            <input type="checkbox" />
            <label className="m-3">
              <h4>Internships</h4>
            </label>
          </li>
          <li>
            <input type="checkbox" />
            <label className="m-3">
              <h4>Jobs</h4>
            </label>
          </li>
        </div>
      </ul>
      <h5>Price</h5>
      {/*<p>The price between {value[0]} and {value[1]}</p>*/}
      <input
        type="range"
        //value={value}
        //onChange={rangeSelector}
        min="1000"
        max="50000"
        step="500"
        style={{ width: '300px' }}
      ></input>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'row',
          listStyle: 'none',
        }}
      >
        <div>
          <Button variant="success" type='Submit' onClick={Submit}>
            Submit
          </Button>
          <ToastContainer />
        </div>
        <Button variant="danger">Clear</Button>
      </div>
    </form>
  )
}

export default FilterModal
