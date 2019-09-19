import React from 'react';

export default function MemberList(props) {
    const { teamMemberList } = props;
    return(
        <div className='members'>
            {
                teamMemberList.map(member => {
                    return <h5>{member.name} is a {member.role}</h5>
                })
            }
        </div>
    );
}