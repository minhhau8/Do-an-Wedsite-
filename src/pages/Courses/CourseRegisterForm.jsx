import React, { useState, useEffect } from "react";
import { gapi } from "gapi-script";


const CLIENT_ID = "417708987257-druf3iba0i3cfbm0pv09p3pqjlvd3aq5.apps.googleusercontent.com";
const API_KEY = "AIzaSyBut_XkysysWCsvReTyC_OVvN6HZp_rhFw";
const SPREADSHEET_ID = "14Jw1JvRsEWlqphpzAk2xS8AWjk5SmsUkAfCVT5B0RaQ";

function CourseRegisterForm() {
  const [formData, setFormData] = useState({
    Name: '',
    email: '',
    phone: '',
    address: '',
    major: '',
    message: '',
  });
  const [isSentSuccess, setIsSentSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    function start() {
      gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: [
            "https://sheets.googleapis.com/$discovery/rest?version=v4",
          ],
          scope:
            "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/spreadsheets",
        })
        .then(
          () => {
            console.log("GAPI client loaded for API");
          },
          (error) => {
            console.error("Error loading GAPI client for API", error);
          }
        );
    }

    gapi.load("client:auth2", start);
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    try {
      await authenticate();
    } catch (error) {
      setErrorMessage('Có lỗi xảy ra, vui lòng thử lại sau.');
      console.error("Error submitting form", error);
    } finally {
      setIsLoading(false);
    }
  };

  const authenticate = async () => {
    gapi.auth2
      .getAuthInstance()
      .signIn()
      .then(
        () => {
          console.log("Sign-in successful");
          execute();
        },
        (error) => {
          console.error("Error signing in", error);
          throw error;
        }
      );
  };

  const execute = () => {
    const spreedData = Object.values(formData);
    console.log(spreedData);
    gapi.client.sheets.spreadsheets.values
      .append({
        spreadsheetId: SPREADSHEET_ID,
        range: "A1",
        insertDataOption: "INSERT_ROWS",
        valueInputOption: "USER_ENTERED",
        resource: {
          values: [spreedData],
        },
      })
      .then(
        (response) => {
          console.log("Response", response);
          setIsSentSuccess(true);
          setFormData({
            Name: '',
            email: '',
            phone: '',
            address: '',
            major: '',
            message: '',
          });
        },
        (error) => {
          console.error("Execute error", error);
          throw error;
        }
      );
  };

  const handleCloseAlert = () => {
    setIsSentSuccess(false);
    setErrorMessage('');
  };

  return (

      <div className='container my-5 d-flex justify-content-center'>
        {(isSentSuccess || errorMessage) && (
          <div className={`alert ${isSentSuccess ? 'alert-success' : 'alert-danger'} alert-dismissible fade show small-centered-alert`} role="alert">
            {isSentSuccess ? 'Cảm ơn bạn đã gửi thông tin!' : errorMessage}
            <button type="button" className="btn-close" onClick={handleCloseAlert} aria-label="Close"></button>
          </div>
        )}
        <form id='contact-form' onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name' className='form-label'>Name</label>
            <input
              type='text'
              className='form-control'
              id='name'
              name='Name'
              value={formData.Name}
              onChange={handleChange}
              placeholder='Name'
              required
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>Email</label>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter email'
              required
            />
            <div className='form-text'>We'll never share your email with anyone else.</div>
          </div>
          <div className='mb-3'>
            <label htmlFor='phone' className='form-label'>Phone Number</label>
            <input
              type='tel'
              className='form-control'
              id='phone'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              placeholder='Your Phone Number'
              required
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='address' className='form-label'>Address</label>
            <input
              type='text'
              className='form-control'
              id='address'
              name='address'
              value={formData.address}
              onChange={handleChange}
              placeholder='Your address'
              required
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='major' className='form-label'>Major</label>
            <select
              className='form-select'
              id='major'
              name='major'
              value={formData.major}
              onChange={handleChange}
              required
            >
              <option value=''>Select a major</option>
              <option value='An ninh mạng'>An ninh mạng</option>
              <option value='Phát triển phần mềm'>Phát triển phần mềm</option>
              <option value='Thiết kế đồ họa'>Thiết kế đồ họa</option>
            </select>
          </div>
          <button type='submit' className='btn btn-danger btn-lg' disabled={isLoading}>
            {isLoading ? 'Đang gửi...' : 'Submit'}
          </button>
        </form>
      </div>
  );
}

export default CourseRegisterForm;