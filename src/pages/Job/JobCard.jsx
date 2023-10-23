import React, { useState, useEffect } from "react";
import {
  Stack,
  Flex,
  Heading,
  Box,
  Image,
  Tag,
  Text,
  Button,
  Card,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import {
  FaCalendarAlt,
  FaDollarSign,
  FaBuilding,
  FaBriefcase,
} from "react-icons/fa";
import JobLogo from "../../assets/joblogo.jpg";
import http from "../../library/http";
import { useParams } from "react-router-dom";

const JobCard = () => {
  const { jobId } = useParams();
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;

  useEffect(() => {
    fetchJobs();
  }, [currentPage]);

  const fetchJobs = async () => {
    try {
      const response = await http().get("/jobs/create");
      setJobs(response.data.jobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  function formatJobType(jobTypes) {
    const formattedString = jobTypes
      .replace(/_/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return formattedString;
  }

  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to the first page when the search term changes
  };

  return (
    <>
      <Stack p={5} mb={5}>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<FaBriefcase />} />
          <Input
            id="text"
            type="text"
            placeholder="Search by Job Title"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </InputGroup>
      </Stack>

      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => (
          <Card
            mb={5}
            key={job.id}
            mr={6}
            p="4"
            boxShadow="lg"
            borderRadius="md"
            bg="white"
          >
            <Stack mb={2} direction="row" alignItems="center">
              <Image
                borderRadius={4}
                src={JobLogo}
                alt="Company Logo"
                boxSize={{ base: "40px", md: "60px" }}
                ml={{ base: "0", md: "2" }}
              />
              <Flex align="center">
                <Heading size={{ base: "md", md: "lg" }} fontWeight="semibold">
                  {job.title}
                </Heading>
              </Flex>
              <Tag size="md" colorScheme="blue" ml="auto">
                {formatJobType(job.job_types)}
              </Tag>
              {job.job_featured && (
                <Tag size="md" colorScheme="green">
                  Featured
                </Tag>
              )}
            </Stack>
            <Stack
              p={2}
              color="gray.500"
              direction="row"
              alignItems="center"
              mt="2"
            >
              <Stack direction="row" align="center">
                <FaBuilding color="gray.600" />
                <Box color="gray.600"> {job.company.company_name}</Box>
              </Stack>
              <Stack direction="row" align="center" ml="4">
                <FaCalendarAlt color="gray.600" />
                <Box color="gray.600">{job.job_date}</Box>
              </Stack>
              <Stack direction="row" align="center" ml="4">
                <FaDollarSign color="gray.600" />
                <Box color="gray.600"> {job.income}</Box>
              </Stack>
            </Stack>
            <Stack
              p={2}
              direction={{ base: "column", md: "row" }}
              justifyContent="space-between"
            >
              <Text fontSize={{ base: "sm" }} textAlign="left" maxW="4xl">
                {job.description}
              </Text>
            </Stack>
          </Card>
        ))
      ) : (
        <p>No matching jobs found.</p>
      )}
      {/* Pagination Buttons */}
      <Stack mb={5} direction="row" mt={4} justify="center" spacing={2}>
        {[...Array(Math.ceil(jobs.length / jobsPerPage))].map((_, index) => (
          <Button
            key={index}
            variant="outline"
            colorScheme={currentPage === index + 1 ? "blue" : "gray"}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
      </Stack>
    </>
  );
};

export default JobCard;
