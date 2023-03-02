import { config } from "process";
import {Stripe} from "stripe";
const stripe = new Stripe(
  "",
  {apiVersion: '2022-11-15'}
);