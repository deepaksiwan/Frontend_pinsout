import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterMentor } from '../../redux/actions/mentorActions'
import { Button } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const MentorFilter = (props) => {
  const dispatch = useDispatch()
  const [check, setCheck] = useState([])
  
  const handleCheck = (e) => {
    let arr = [...check]
    let clicked = e.target.value
    let checkfinish = arr.indexOf(clicked)

    if (checkfinish === -1) {
      arr.push(clicked)
    } else {
      arr.splice(checkfinish, 1)
    }
    setCheck(arr)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(filterMentor(check))
    props.mentorFilterBtn(false)
  }
  const Submit = () => toast("Success");
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Select Your Industry</label>
      <select name="industry" onChange={handleCheck} className="form-select">
        <option value="">---</option>
        <option value="Advertising">Advertising</option>
        <option value="Aeronnautics Aerospace &amp; Defense">
          Aeronnautics Aerospace &amp; Defense
        </option>
        <option value="Agriculture &amp; Allied Industries">
          Agriculture &amp; Allied Industries
        </option>
        <option value="AI">AI</option>
        <option value="Airport Operations">Airport Operations</option>
        <option value="Analytics">Analytics</option>
        <option value="Animation">Animation</option>
        <option value="Apparel and Textiles">Apparel and Textiles</option>
        <option value="AR VR (Augmented + Virtual Reality)">
          AR VR (Augmented + Virtual Reality)
        </option>
        <option value="Architecture Interior Design">
          Architecture Interior Design
        </option>
        <option value="Art &amp; Photography">Art &amp; Photography</option>
        <option value="Automotive">Automotive</option>
        <option value="Banking">Banking</option>
        <option value="Biotechnology">Biotechnology</option>
        <option value="BPM">BPM</option>
        <option value="Cement">Cement</option>
        <option value="Chemicals">Chemicals</option>
        <option value="Computer vision">Computer vision</option>
        <option value="Construction">Construction</option>
        <option value="Consumer Durables">Consumer Durables</option>
        <option value="Dating matrimonial">Dating matrimonial</option>
        <option value="Design">Design</option>
        <option value="Edtech">Edtech</option>
        <option value="Education">Education</option>
        <option value="Electronics system design &amp; Manufacturing">
          Electronics system design &amp; Manufacturing
        </option>
        <option value="Enterprise software">Enterprise software</option>
        <option value="Engineering &amp; Capital Goods">
          Engineering &amp; Capital Goods
        </option>
        <option value="Events">Events</option>
        <option value="Fashion">Fashion</option>
        <option value="Finance">Finance</option>
        <option value="Fintech">Fintech</option>
        <option value="FMCG">FMCG</option>
        <option value="Food and beverages">Food and beverages</option>
        <option value="Government">Government</option>
        <option value="Gems &amp; Jewellery">Gems &amp; Jewellery</option>
        <option value="Green Technology">Green Technology</option>
        <option value="Healthcare &amp; lifesciences">
          Healthcare &amp; lifesciences
        </option>
        <option value="House-Hold services">House-Hold services</option>
        <option value="Horticulture">Horticulture</option>
        <option value="Human resources">Human resources</option>
        <option value="Indic languages startups">
          Indic languages startups
        </option>
        <option value="Internet of things">Internet of things</option>
        <option value="Insurance">Insurance</option>
        <option value="IT Services">IT Services</option>
        <option value="Logistics">Logistics</option>
        <option value="Manufacturing">Manufacturing</option>
        <option value="Marketing">Marketing</option>
        <option value="Media and entertainment">Media and entertainment</option>
        <option value="Metals &amp; Mining">Metals &amp; Mining</option>
        <option value="Nanotechnology">Nanotechnology</option>
        <option value="Natural Sciences">Natural Sciences</option>
        <option value="Non-Renewable energy">Non-Renewable energy</option>
        <option value="NGO">NGO</option>
        <option value="NPO">NPO</option>
        <option value="Other speciality retailers">
          Other speciality retailers
        </option>
        <option value="Passenger experience">Passenger experience</option>
        <option value="Pets &amp; animals">Pets &amp; animals</option>
        <option value="Pharmaceuticals">Pharmaceuticals</option>
        <option value="Professional &amp; Commercial services">
          Professional &amp; Commercial services
        </option>
        <option value="Real estate">Real estate</option>
        <option value="Renewable energy">Renewable energy</option>
        <option value="Retail">Retail</option>
        <option value="Robotics">Robotics</option>
        <option value="Rural development">Rural development</option>
        <option value="Safety">Safety</option>
        <option value="Security solutions">Security solutions</option>
        <option value="Social impact">Social impact</option>
        <option value="Social network">Social network</option>
        <option value="Sports">Sports</option>
        <option value="Technology hardware">Technology hardware</option>
        <option value="Telecommunications &amp; Networking">
          Telecommunications &amp; Networking
        </option>
        <option value="Toys and games">Toys and games</option>
        <option value="Transportation &amp; Storage">
          Transportation &amp; Storage
        </option>
        <option value="Travel and tourism">Travel and tourism</option>
        <option value="Waste management">Waste management</option>
        <option value="Others">Others</option>
      </select>
      <div className="form-group mb-4">
        <label htmlFor="first-pref">
          Choose Domain Expertise <span>(1st preference)</span>
        </label>
        <select name="domain" onChange={handleCheck} className="form-select">
          <option value="">---</option>
          <option value="3D Painting">3D Painting</option>
          <option value="Accounting">Accounting</option>
          <option value="Ad tech">Ad tech</option>
          <option value="Advisory">Advisory</option>
          <option value="Agritech">Agritech</option>
          <option value="Agricultural chemicals">Agricultural chemicals</option>
          <option value="Agriculture">Agriculture</option>
          <option value="Animal Husbandry">Animal Husbandry</option>
          <option value="Apparel">Apparel</option>
          <option value="Apparel &amp; accessories">
            Apparel &amp; accessories
          </option>
          <option value="Application Development">
            Application Development
          </option>
          <option value="Art">Art</option>
          <option value="Auto &amp; Truck manufacturers">
            Auto &amp; Truck manufacturers
          </option>
          <option value="Auto vehicles, parts &amp; service retailers">
            Auto vehicles, parts &amp; service retailers
          </option>
          <option value="Auto, Truck &amp; Motorcycle Parts">
            Auto, Truck &amp; Motorcycle Parts
          </option>
          <option value="Aviation and others">Aviation and others</option>
          <option value="Baby care">Baby care</option>
          <option value="Banking and Financial Services">
            Banking and Financial Services
          </option>
          <option value="Big data">Big data</option>
          <option value="Billing and invoicing">Billing and invoicing</option>
          <option value="Biotechnology">Biotechnology</option>
          <option value="Bitcoin and Blockchain">Bitcoin and Blockchain</option>
          <option value="BPO">BPO</option>
          <option value="Branding">Branding</option>
          <option value="Business Analytics">Business Analytics</option>
          <option value="Business finance">Business finance</option>
          <option value="Business Intelligence">Business Intelligence</option>
          <option value="Business support services">
            Business support services
          </option>
          <option value="Business support supplies">
            Business support supplies
          </option>
          <option value="Clean tech">Clean tech</option>
          <option value="Clean technology">Clean technology</option>
          <option value="Cloud">Cloud</option>
          <option value="Coaching">Coaching</option>
          <option value="Collaboration">Collaboration</option>
          <option value="Commercial printing services">
            Commercial printing services
          </option>
          <option value="Commodity chemicals">Commodity chemicals</option>
          <option value="Comparison shopping">Comparison shopping</option>
          <option value="Computer and electronic retailers">
            Computer and electronic retailers
          </option>
          <option value="Construction and engeering">
            Construction and engeering
          </option>
          <option value="Construction materials">Construction materials</option>
          <option value="Construction supplies and fixtures">
            Construction supplies and fixtures
          </option>
          <option value="Consulting">Consulting</option>
          <option value="Consumer products">Consumer products</option>
          <option value="Consumer services">Consumer services</option>
          <option value="Corporate social responsibility">
            Corporate social responsibility
          </option>
          <option value="Coworking spaces">Coworking spaces</option>
          <option value="Crowdfunding">Crowdfunding</option>
          <option value="Customer support">Customer support</option>
          <option value="CXM">CXM</option>
          <option value="Cyber security">Cyber security</option>
          <option value="Dairy farming">Dairy farming</option>
          <option value="Data science">Data science</option>
          <option value="Defense equipment">Defense equipment</option>
          <option value="Digital marketing">Digital marketing</option>
          <option value="Digital marketing (SEO Automation)">
            Digital marketing (SEO Automation)
          </option>
          <option value="Digital media">Digital media</option>
          <option value="Digital media blogging">Digital media blogging</option>
          <option value="Digital media news">Digital media news</option>
          <option value="Digital media publishing">
            Digital media publishing
          </option>
          <option value="Digital media Video">Digital media Video</option>
          <option value="Discovery">Discovery</option>
          <option value="Diversified Chemicals">Diversified Chemicals</option>
          <option value="Drones">Drones</option>
          <option value="E-Commerce">E-Commerce</option>
          <option value="E-Learning">E-Learning</option>
          <option value="Education">Education</option>
          <option value="Education technology">Education technology</option>
          <option value="Electric vehicles">Electric vehicles</option>
          <option value="Electronics">Electronics</option>
          <option value="Electronics/ Instrumentation">
            Electronics/ Instrumentation
          </option>
          <option value="Embedded">Embedded</option>
          <option value="Employment services">Employment services</option>
          <option value="Enterprise Mobility">Enterprise Mobility</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Environmental services &amp; Equipment">
            Environmental services &amp; Equipment
          </option>
          <option value="ERP">ERP</option>
          <option value="Event management">Event management</option>
          <option value="Experiental Travel">Experiental Travel</option>
          <option value="Facility management">Facility management</option>
          <option value="Fan Merchandise">Fan Merchandise</option>
          <option value="Fantasy sports">Fantasy sports</option>
          <option value="Fashion">Fashion</option>
          <option value="Fashion Technology">Fashion Technology</option>
          <option value="Fintech">Fintech</option>
          <option value="Fisheries">Fisheries</option>
          <option value="Food &amp; Beverage">Food &amp; Beverage</option>
          <option value="Food Processing">Food Processing</option>
          <option value="Food technology/ Food delivery">
            Food technology/ Food delivery
          </option>
          <option value="Foreign exchange">Foreign exchange</option>
          <option value="Frieght &amp; Logistic services">
            Frieght &amp; Logistic services
          </option>
          <option value="Handicraft">Handicraft</option>
          <option value="Health &amp; Wellness">Health &amp; Wellness</option>
          <option value="Healthcare IT">Healthcare IT</option>
          <option value="Healthcare services">Healthcare services</option>
          <option value="Healthcare technology">Healthcare technology</option>
          <option value="Holiday Rentals">Holiday Rentals</option>
          <option value="Home care">Home care</option>
          <option value="Home furnishings retail">
            Home furnishings retail
          </option>
          <option value="Home improvement products and services retailers">
            Home improvement products and services retailers
          </option>
          <option value="Home security Solutions">
            Home security Solutions
          </option>
          <option value="Homebuilding">Homebuilding</option>
          <option value="Horticulture">Horticulture</option>
          <option value="Hospitality">Hospitality</option>
          <option value="Hotel">Hotel</option>
          <option value="Housina">Housina</option>
          <option value="Human Resource">Human Resource</option>
          <option value="Import-Export">Import-Export</option>
          <option value="Industrial Design">Industrial Design</option>
          <option value="Industrial/ Energy">Industrial/ Energy</option>
          <option value="Insurance">Insurance</option>
          <option value="Integrated communication services">
            Integrated communication services
          </option>
          <option value="International Business">International Business</option>
          <option value="Internet/ web services">Internet/ web services</option>
          <option value="Internships">Internships</option>
          <option value="IT Consulting">IT Consulting</option>
          <option value="IT management">IT management</option>
          <option value="IT Services">IT Services</option>
          <option value="Jewellery">Jewellery</option>
          <option value="Job Preparation">Job Preparation</option>
          <option value="KPO">KPO</option>
          <option value="Laundry">Laundry</option>
          <option value="Leather footwear">Leather footwear</option>
          <option value="Leather textile goods">Leather textile goods</option>
          <option value="Legal">Legal</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Location based">Location based</option>
          <option value="Loans">Loans</option>
          <option value="Loyalty">Loyalty</option>
          <option value="Machine learning">Machine learning</option>
          <option value="Manufacture of Electrical Equipment">
            Manufacture of Electrical Equipment
          </option>
          <option value="Manufacture of Machinery and Equipment">
            Manufacture of Machinery and Equipment
          </option>
          <option value="Manufacturing">Manufacturing</option>
          <option value="Manufacturing &amp; warehouse">
            Manufacturing &amp; warehouse
          </option>
          <option value="Market research">Market research</option>
          <option value="Marketing/ Advertising">Marketing/ Advertising</option>
          <option value="Media and Entertainment">
            Media and Entertainment
          </option>
          <option value="Medical devices and equipment">
            Medical devices and equipment
          </option>
          <option value="Medical devices Biomedical">
            Medical devices Biomedical
          </option>
          <option value="Microbrewery">Microbrewery</option>
          <option value="Microfinance">Microfinance</option>
          <option value="Mobile wallets payments">
            Mobile wallets payments
          </option>
          <option value="Movies">Movies</option>
          <option value="natural language processing">
            natural language processing
          </option>
          <option value="Network Technology Solutions">
            Network Technology Solutions
          </option>
          <option value="New age construction technologies">
            New age construction technologies
          </option>
          <option value="NGO">NGO</option>
          <option value="NLP">NLP</option>
          <option value="Non-Leather footwear">Non-Leather footwear</option>
          <option value="Non- Leather textiles goods">
            Non- Leather textiles goods
          </option>
          <option value="Oil and gas drilling">Oil and gas drilling</option>
          <option value="Oil and gas exploration and production">
            Oil and gas exploration and production
          </option>
          <option value="Oil and gas Transportation services">
            Oil and gas Transportation services
          </option>
          <option value="Oil related services and equipment">
            Oil related services and equipment
          </option>
          <option value="Online classified">Online classified</option>
          <option value="OOH Media">OOH Media</option>
          <option value="Operations">Operations</option>
          <option value="Organic agriculture">Organic agriculture</option>
          <option value="P2P Landing">P2P Landing</option>
          <option value="Passenger Transportation services">
            Passenger Transportation services
          </option>
          <option value="Payment platforms">Payment platforms</option>
          <option value="Personal care">Personal care</option>
          <option value="Personal finance">Personal finance</option>
          <option value="Personal security">Personal security</option>
          <option value="Pharmaceutical">Pharmaceutical</option>
          <option value="Photography">Photography</option>
          <option value="Physical toys and games">
            Physical toys and games
          </option>
          <option value="Point of sales">Point of sales</option>
          <option value="Power">Power</option>
          <option value="Product development">Product development</option>
          <option value="Professional information services">
            Professional information services
          </option>
          <option value="Project management">Project management</option>
          <option value="Public citizen security solutions">
            Public citizen security solutions
          </option>
          <option value="Railway">Railway</option>
          <option value="Recruitment Jobs">Recruitment Jobs</option>
          <option value="Renewable Energy Solutions">
            Renewable Energy Solutions
          </option>
          <option value="Renewable Nuclear energy">
            Renewable Nuclear energy
          </option>
          <option value="Renewable Solar energy">Renewable Solar energy</option>
          <option value="Renewable wind energy">Renewable wind energy</option>
          <option value="Restaurants">Restaurants</option>
          <option value="Retail technology">Retail technology</option>
          <option value="Roads">Roads</option>
          <option value="Robotics application">Robotics application</option>
          <option value="Robotics technology">Robotics technology</option>
          <option value="Sales">Sales</option>
          <option value="SCM">SCM</option>
          <option value="Semiconductor">Semiconductor</option>
          <option value="Skill development">Skill development</option>
          <option value="Skills assessment">Skills assessment</option>
          <option value="Smart home">Smart home</option>
          <option value="Social commerce">Social commerce</option>
          <option value="Social media">Social media</option>
          <option value="Software">Software</option>
          <option value="Space technology">Space technology</option>
          <option value="Specialty chemicals">Specialty chemicals</option>
          <option value="Sports promotion and networking">
            Sports promotion and networking
          </option>
          <option value="Strategy">Strategy</option>
          <option value="Stock Trading">Stock Trading</option>
          <option value="Supply Chain">Supply Chain</option>
          <option value="Talent management">Talent management</option>
          <option value="Testing">Testing</option>
          <option value="Textile">Textile</option>
          <option value="Ticketing">Ticketing</option>
          <option value="Tires and rubber products">
            Tires and rubber products
          </option>
          <option value="Traffic management">Traffic management</option>
          <option value="Training">Training</option>
          <option value="Transport infrastructure">
            Transport infrastructure
          </option>
          <option value="Transportation">Transportation</option>
          <option value="Travel">Travel</option>
          <option value="Utility services">Utility services</option>
          <option value="Virtual games">Virtual games</option>
          <option value="Waste management">Waste management</option>
          <option value="Wayside amenties">Wayside amenties</option>
          <option value="Wearables">Wearables</option>
          <option value="Web design">Web design</option>
          <option value="Web development">Web development</option>
          <option value="Weddings">Weddings</option>
          <option value="Wireless">Wireless</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'row',
          listStyle: 'none',
        }}
      >
        <div>
          <Button variant="success" type="submit" onClick={Submit}>
            Submit
          </Button>
          <ToastContainer />
        </div>
        <Button
          variant="danger"
          onClick={(e) => {
            e.preventDefault()
            setCheck("")
          }}
        >
          Clear
        </Button>
      </div>
    </form>
  )
}

export default MentorFilter
