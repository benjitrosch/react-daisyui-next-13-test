import MenuItem from '../app/MenuItem'

const TEST_ITEM = {
  item_data: {
    name: "test item",
    variations: "test"
  }
}

const Home = () => (
  <div className='w-96'>
    <MenuItem item={TEST_ITEM} />
  </div>
)

export default Home
