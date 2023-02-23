import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import IletisimFormu from "./IletisimFormu";

test("hata olmadan render ediliyor", () => {
  render(<IletisimFormu />);
});

test("iletişim formu headerı render ediliyor", () => {
  render(<IletisimFormu />);
  const baslik = screen.getByText(/İletişim Formu/i);
  expect(baslik).toBeInTheDocument();
});

test("kullanıcı adını 5 karakterden az girdiğinde BİR hata mesajı render ediyor.", async () => {
  render(<IletisimFormu />);
  const isimInput = screen.getByPlaceholderText(/İlhan/i);
  userEvent.type(isimInput, "Yeah");
  const isimHata = screen.getByTestId("error");
  expect(isimHata).toBeInTheDocument();
});

test("kullanıcı inputları doldurmadığında ÜÇ hata mesajı render ediliyor.", async () => {
  render(<IletisimFormu />);
  const adInput = screen.getByPlaceholderText(/İlhan/i);

  const soyadInput = screen.getByPlaceholderText(/Mansız/i);

  const emailInput = screen.getByPlaceholderText(
    /yüzyılıngolcüsü@hotmail.com/i
  );
  userEvent.type(adInput, "m");

  userEvent.type(soyadInput, "m");
  userEvent.clear(soyadInput);

  userEvent.type(emailInput, "m");

  const hatalarTesti = await screen.getAllByTestId("error");
  expect(hatalarTesti.length).toEqual(3);
});

test("kullanıcı doğru ad ve soyad girdiğinde ama email girmediğinde BİR hata mesajı render ediliyor.", async () => {
  render(<IletisimFormu />);
  const isimInput = screen.getByPlaceholderText(/İlhan/i);
  userEvent.type(isimInput, "Busem");

  const soyİsimInput = screen.getByPlaceholderText(/Mansız/i);
  userEvent.type(soyİsimInput, "Mutluoğlu");

  const submitButton = screen.getAllByRole("button");
  userEvent.click(submitButton[0]);

  const mailInput = screen.getByPlaceholderText(/yüzyılıngolcüsü@hotmail.com/i);
  userEvent.type(mailInput, "");
  const errorText = screen.getByTestId("error");
  expect(errorText).toBeInTheDocument();
});

test('geçersiz bir mail girildiğinde "email geçerli bir email adresi olmalıdır." hata mesajı render ediliyor', async () => {
  render(<IletisimFormu />);
  const email = screen.getByPlaceholderText(/yüzyılıngolcüsü@hotmail.com/i);
  userEvent.type(email, "Eyy");
  const errorText = screen.getByTestId("error");
  expect(errorText).toHaveTextContent(
    "email geçerli bir email adresi olmalıdır."
  );
});

test('soyad girilmeden gönderilirse "soyad gereklidir." mesajı render ediliyor', async () => {
  render(<IletisimFormu />);
  const soyadInput = screen.getByPlaceholderText(/Mansız/i);
  userEvent.type(soyadInput, "d");
  userEvent.clear(soyadInput);
  const submitButton = screen.getAllByRole("button");
  userEvent.click(submitButton);
  const hataMsg = screen.getByTestId("error");
  expect(hataMsg).toHaveTextContent("soyad gereklidir.");
});

test("ad,soyad, email render ediliyor. mesaj bölümü doldurulmadığında hata mesajı render edilmiyor.", async () => {
  render(<IletisimFormu />);
  const isimInput = screen.getByPlaceholderText(/İlhan/i);
  userEvent.type(isimInput, "Busem");

  const soyİsimInput = screen.getByPlaceholderText(/Mansız/i);
  userEvent.type(soyİsimInput, "Mutluoğlu");

  const mailInput = screen.getByPlaceholderText(/yüzyılıngolcüsü@hotmail.com/i);
  userEvent.type(mailInput, "yüzyılıngolcüsü@hotmail.com");

  const submitButton = screen.getAllByRole("button");
  userEvent.click(submitButton);
  expect(getByTestId("button")).toBeDisabled();

  /*   await waitFor(() => {
    const errorText = screen.getByTestId("error");
    expect(errorText.length).toBe(0);
  }); */
});

test("form gönderildiğinde girilen tüm değerler render ediliyor.", async () => {
  render;
});
