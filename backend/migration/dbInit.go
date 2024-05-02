package migration

import (
	"database/sql"

	_ "github.com/lib/pq"
)

func DBInit() {
	db, err := sql.Open("postgres", "storage.db")
	if err != nil {
		panic("DB is nil")
	}

	createArchTable(db)

}

func createArchTable(db *sql.DB) {
	sql := `CREATE TABLE IF NOT EXISTS arch
			(id SERIAL PRIMARY KEY,
			line VARCHAR(400) NOT NULL,
			lineType VARCHAR(100) NOT NULL)`
	_, err := db.Exec(sql)
	if err != nil {
		panic(err)
	}
}
