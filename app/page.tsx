
export default function Home() {



  return (
    <div>
      <table>
        <tbody>
          <tr key={1}>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
          <tr key={2}>
            <td>Anom</td>
            <td>19</td>
            <td>Male</td>
          </tr>
          <tr key={3}>
            <td>Megha</td>
            <td>19</td>
            <td>Female</td>
          </tr>
          <tr key={4}>
            <td>Subham</td>
            <td>25</td>
            <td>Male</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
