db.create(
    {
        user: 'todoroot',
        pwd: 'todoroot',
        roles: [
            {
                role: 'readWrite',
                db: 'tododb'
            }
        ]
    }
)