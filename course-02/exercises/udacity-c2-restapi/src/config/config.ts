export const config = {
  dev: {
    username: "udagramgwdev",
    password: "udagramgwdev",
    database: "udagramgwdev",
    host: "udagramwhitlockdev.cwpbc0leojra.us-east-2.rds.amazonaws.com",
    dialect: "postgres",
    aws_region: "us-east-2",
    aws_profile: "default",
    aws_media_bucket: "udcity-project-dev",
  },
  prod: {
    username: "",
    password: "",
    database: "udagram_prod",
    host: "",
    dialect: "postgres",
  },
};
