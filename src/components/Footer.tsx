import { useState, useEffect } from 'react';

function Footer() {
  const [year, setYear] = useState<number>();

  useEffect(() => {
    const theYear = new Date().getFullYear();
    setYear(theYear);
  }, []);

  return (
    <div>
      <p>Movie Tracker</p>
      <p>Copyright &copy; {year}</p>
    </div>
  );
}

export default Footer;
