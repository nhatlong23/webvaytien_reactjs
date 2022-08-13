import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
// import { Slider } from "material-ui-slider";
import Slider from "@material-ui/core/Slider";
const Home = () => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    phone: "",
    cmnd: "",
    note: "",
    sex: "",
    sotaikhoan: "",
  });
  const handleValue = (e) => {
    setValues((value) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send("service_ri06506", "template_w9kfe6p", values, "RJMIYcnSCzUrmtueb")
      .then(
        (result) => {
          toast.success("Gửi mail vay tiền thành công");
        },
        (error) => {
          toast.error("Gửi mail vay tiền thất bại");
        }
      );
  };
  const marks = [
    {
      value: 1000000,
      label: "1tr",
    },
    {
      value: 2000000,
      label: "2tr",
    },
    {
      value: 3000000,
      label: "3tr",
    },
    {
      value: 4000000,
      label: "4tr",
    },
    {
      value: 5000000,
      label: "5tr",
    },
    {
      value: 6000000,
      label: "6tr",
    },
    {
      value: 7000000,
      label: "7tr",
    },
    {
      value: 8000000,
      label: "8tr",
    },
    {
      value: 9000000,
      label: "9tr",
    },
    {
      value: 10000000,
      label: "10tr",
    },
  ];
  function valuetext(value) {
    return `${value}°C`;
  }
  const [money, setMoney] = useState(1000000);

  useEffect(() => {
    setValues({ ...values, money: money });
  }, [money, setValues, values]);

  const formatted = new Intl.NumberFormat().format(money) + "VNĐ";
  const handleChangeValue = (e, newValue) => {
    setMoney(newValue);
    setValues({ ...values, money: newValue });
  };
  return (
    <div>
      <div className="container">
        Số tiền vay: {formatted}
        <Slider
          aria-label="Money"
          defaultValue={1000000}
          getAriaValueText={valuetext}
          step={500000}
          marks={marks}
          min={1000000}
          max={10000000}
          onChangeCommitted={handleChangeValue}
        />
        <form autoComplete="off" onSubmit={sendEmail}>
          <div class="form-group">
            <label for="exampleInputPassword1">Họ Và Tên</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Điền họ và tên"
              name="fullname"
              onChange={handleValue}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Số điện thoại liên hệ</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Điền Số Điện Thoại"
              name="phone"
              onChange={handleValue}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Số tài khoản liên hệ</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Điền Số Tài khoản"
              name="sotaikhoan"
              onChange={handleValue}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Điền email của bạn"
              name="email"
              onChange={handleValue}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">CMND/CCCD</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Điền CMND/CCCD"
              name="cmnd"
              onChange={handleValue}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Giới Tính</label>
            <select className="form-control" onChange={handleValue} name="sex">
              <option>Chọn giới tính</option>
              <option value="male">Nam</option>
              <option value="female">Nữ</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Ghi Chú</label>
            <textarea
              name="note"
              class="form-control"
              style={{ resize: "none" }}
              onChange={handleValue}
            ></textarea>
          </div>
          <div class="form-check"></div>
          <button type="submit" class="btn btn-primary">
            Đăng kí vay
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
