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
  Checkbox,
  Select,
  Grid,
  GridItem,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Link,
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
import JobHero from "./JobHero";
import Apply from "../Apply/Apply";

const Job = () => {
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

  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);
  const [employmentType, setEmploymentType] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");

  // Move the declaration of filteredJobs here
  const filteredJobs = jobs.filter((job) => {
    const titleMatch = job.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const dateMatch = dateFilter ? job.job_date.includes(dateFilter) : true;
    const featureMatch = isFeatured ? job.job_featured : true;
    const employmentTypeMatch = employmentType
      ? job.job_types.includes(employmentType)
      : true;
    const salaryMatch =
      (minSalary === "" || job.income >= minSalary) &&
      (maxSalary === "" || job.income <= maxSalary);

    return (
      titleMatch &&
      dateMatch &&
      featureMatch &&
      employmentTypeMatch &&
      salaryMatch
    );
  });

  const indexOfLastFilteredJob = currentPage * jobsPerPage;
  const indexOfFirstFilteredJob = indexOfLastFilteredJob - jobsPerPage;
  const currentFilteredJobs = filteredJobs.slice(
    indexOfFirstFilteredJob,
    indexOfLastFilteredJob
  );

  const handlePaginationClick = (pageIndex) => {
    setCurrentPage(pageIndex);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleDateFilterChange = (event) => {
    setDateFilter(event.target.value);
    setCurrentPage(1);
  };

  const handleFeatureFilterChange = (isChecked) => {
    setIsFeatured(isChecked);
    setCurrentPage(1);
  };

  const handleEmploymentTypeChange = (event) => {
    setEmploymentType(event.target.value);
    setCurrentPage(1);
  };

  // Salary
  const handleMinSalaryChange = (value) => {
    setMinSalary(value);
    setCurrentPage(1);
  };

  const handleMaxSalaryChange = (value) => {
    setMaxSalary(value);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setDateFilter("");
    setIsFeatured(false);
    setEmploymentType("");
    setMinSalary("");
    setMaxSalary("");
    setCurrentPage(1);
  };

  function formatJobType(jobTypes) {
    const formattedString = jobTypes
      .replace(/_/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return formattedString;
  }

  return (
    <>
      <JobHero />
      <Stack p={5}>
        <Grid templateColumns={{ base: "1fr", md: "300px 1fr" }} gap={4}>
          <Box bg={"blackAlpha.50"}>
            <GridItem colSpan={{ base: "1", md: "1" }}>
              <Stack mt={5} p={5}>
                <Heading fontWeight="semibold" mb={4}>
                  Job Search Filter
                </Heading>
                <InputGroup mb={3}>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaBriefcase />}
                  />
                  <Input
                    id="title"
                    type="title"
                    placeholder="Search by Job Title"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </InputGroup>
                <InputGroup mb={3}>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaCalendarAlt />}
                  />
                  <Input
                    id="date"
                    type="date"
                    placeholder="Filter by date (e.g., '2023-10-23')"
                    value={dateFilter}
                    onChange={handleDateFilterChange}
                  />
                </InputGroup>
                <InputGroup mb={3}>
                  <Select
                    id="employment"
                    mb={2}
                    value={employmentType}
                    onChange={handleEmploymentTypeChange}
                  >
                    <option value="">Employment Types</option>
                    <option value="full_time">Full Time</option>
                    <option value="part_time">Part Time</option>
                  </Select>
                </InputGroup>
                <Checkbox
                  id="featured"
                  mb={3}
                  isChecked={isFeatured}
                  onChange={(e) => handleFeatureFilterChange(e.target.checked)}
                >
                  Featured Jobs
                </Checkbox>
                <InputGroup mb={5}>
                  <FaDollarSign color="gray.600" />
                  <NumberInput
                    id="minsalary"
                    ml="2"
                    size="sm"
                    value={minSalary}
                    onChange={handleMinSalaryChange}
                    placeholder="Min Salary"
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Text ml="2" mr="1">
                    to
                  </Text>
                  <NumberInput
                    id="maxsalary"
                    size="sm"
                    value={maxSalary}
                    onChange={handleMaxSalaryChange}
                    placeholder="Max Salary"
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </InputGroup>
                <Button bg="blue.300" onClick={handleClearFilters}>
                  Clear Filters
                </Button>
              </Stack>
            </GridItem>
          </Box>

          <GridItem colSpan={{ base: "1", md: "1" }}>
            {currentFilteredJobs.length > 0 ? (
              currentFilteredJobs.map((job) => (
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
                      <Heading
                        size={{ base: "md", md: "lg" }}
                        fontWeight="semibold"
                      >
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
                    <Stack
                      direction={{ base: "column", md: "row" }}
                      alignItems="center"
                    >
                      <Link href="/apply">
                        <Button ml="auto" variant="outline" colorScheme="blue">
                          Apply for Job
                        </Button>
                      </Link>
                    </Stack>
                  </Stack>
                </Card>
              ))
            ) : (
              <p>No matching jobs found.</p>
            )}
            {/* Pagination Buttons */}
            <Stack mb={5} direction="row" mt={4} justify="center" spacing={2}>
              {[...Array(Math.ceil(jobs.length / jobsPerPage))].map(
                (_, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    colorScheme={currentPage === index + 1 ? "blue" : "gray"}
                    onClick={() => handlePaginationClick(index + 1)}
                  >
                    {index + 1}
                  </Button>
                )
              )}
            </Stack>
          </GridItem>
        </Grid>
      </Stack>
    </>
  );
};
export default Job;
