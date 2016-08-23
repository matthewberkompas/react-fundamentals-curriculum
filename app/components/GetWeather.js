const React = require('react');

function Button () {
  return (
      <button
        className="btn btn-success"
        type="submit"
        style={{fontFamily: 'Courier new'}}>
        Get Weather
      </button>
  )
}

function Input (props) {
  return (
    <div className="form-group">
      <input
        className="form-control"
        type="text"
        placeholder="Seattle, WA"
        style={{fontFamily: 'Courier new'}}
        onChange={props.onUpdateLocation}
        value={props.location} />
    </div>
  )
}

function GetWeather (props) {
  return (
    <div className="col-sm-4 col-sm-offset-4 text-center">
      <h2 style={{marginTop: 135 + 'px', fontFamily: 'Courier new', color: '#fff'}}>Find Your Weather</h2>
      <form onSubmit={props.onSubmitLocation}>
        <Input location={props.location} onUpdateLocation={props.onUpdateLocation}/>
        <Button />
      </form>
    </div>
  )
}

module.exports = GetWeather;
