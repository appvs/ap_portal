package migration

import (
	"database/sql"
	"fmt"

	_ "github.com/lib/pq"
)

func DBInit() {
	const (
		host     = "localhost"
		port     = 5432
		user     = "postgres"
		password = "root"
		dbname   = "ap_portal"
	)

	psqlconnect := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)

	db, err := sql.Open("postgres", psqlconnect)
	if err != nil {
		panic("DB is nil")
	}

	defer db.Close()

	insertStmt := `insert into "Students"("Name", "Roll") values('John', 1)`
	_, err = db.Exec(insertStmt)
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
