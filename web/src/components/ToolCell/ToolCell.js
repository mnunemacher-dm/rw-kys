import Tool from 'src/components/Tool'

export const QUERY = gql`
  query FIND_TOOL_BY_ID($id: Int!) {
    tool: tool(id: $id) {
      id
      name
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Tool not found</div>

export const Success = ({ tool }) => {
  return <Tool tool={tool} />
}
