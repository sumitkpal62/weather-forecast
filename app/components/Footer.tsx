export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#333] text-white p-4 text-center absolute bottom-0 w-full">
      <p>&copy; {year} Weather Forcast</p>
    </footer>
  );
}