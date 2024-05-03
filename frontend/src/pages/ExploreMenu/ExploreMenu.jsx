import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
	return (
		<div className='explore-menu' id='explore-menu'>
			<h1>Explore Our Menu</h1>
			<p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array</p>
			<div className='explore-menu-list'>
				{menu_list.map((m, i) => {
					return (
						<div onClick={()=>setCategory(prev=>prev===m.menu_name?"All":m.menu_name)} className='explore-menu-list-item' key={i}>
							<img className={category===m.menu_name?"active":""} src={m.menu_image} alt={m.menu_name}/>
							<p>{m.menu_name}</p>
						</div>
					)
				})}
			</div>
			<hr />
		</div>
	)
}

export default ExploreMenu