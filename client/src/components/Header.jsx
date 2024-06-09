
import { Link } from 'react-router-dom'
import Auth from '../utils/auth'

export default function Header() {
  return (
    <div>
      <Link
          className="btn btn-lg btn-primary m-2"
          onClick={() => Auth.logout()}
        >
          Log Out
        </Link>
    </div>
  )
}
